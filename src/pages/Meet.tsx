import React, { useEffect, useState, useRef } from "react";
import * as io from "socket.io-client";
import Peer from "simple-peer";

function Meet(props: any) {
  const [users, setUsers] = useState<any>([]);

  // const meetID = props.match.params.meetID;
  const meetID = "hello";
  const userVideo = useRef<any>();
  const peersRef = useRef<any>([]);
  const socket = useRef<any>();

  const createUser = (userToSignal: any, callerId: any, stream: any) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal: any) => {
      socket.current.emit("sending signal", { userToSignal, callerId, signal });
    });

    return peer;
  };

  const addUser = (incomingSignal: any, callerId: any, stream: any) => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal: any) => {
      socket.current.emit("returning signal", { signal, callerId });
    });

    peer.signal(incomingSignal);
  };

  const allUsersToPeers = (socket: any, stream: any) => {
    socket.current.on("users", (users: any) => {
      const peers: any = [];
      users.forEach((userID: any) => {
        const peer = createUser(userID, socket.current.id, stream);
        peersRef.current.push({
          peerID: userID,
          peer: peer,
        });
        peers.push(peer);
      });

      return peers;
    });
  };

  const Video = (props: any) => {
    const ref = useRef<any>();

    useEffect(() => {
      props.peer.on("stream", (stream: any) => {
        if (ref.current) {
          ref.current.srcObject = stream;
        }
      });
    }, []);

    return <video playsInline autoPlay ref={ref} />;
  };

  useEffect(() => {
    socket.current = io.connect("/");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream: any) => {
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }

        socket.current.emit("join meet", meetID);
        const peers: any = allUsersToPeers(socket, stream);
        console.log(peers);
        setUsers(peers);

        socket.current.on("user joined", (payload: any) => {
          const peer = addUser(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          console.log(peer);
          console.log([...users, peer]);
          setUsers([...users, peer]);
        });

        socket.current.on("receiving returned signal", (payload: any) => {
          const item = peersRef.current.find(
            (p: any) => p.peerID === payload.id
          );
          item.peer.signal(payload.signal);
        });
      });
  }, []);

  return (
    <div>
      <h1>{meetID}</h1>
      <video muted playsInline ref={userVideo} autoPlay />
      {/*users.map((peer: any, index: any) => {
        return <Video key={index} peer={peer} />;
      })*/}
      <div></div>
    </div>
  );
}

export default Meet;
