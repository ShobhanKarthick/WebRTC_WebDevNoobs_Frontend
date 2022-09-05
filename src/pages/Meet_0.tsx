import { useEffect, useRef, useState } from "react";
import * as io from "socket.io-client";

function Meet() {
  const [stream, setStream] = useState<any>();
  const [users, setUsers] = useState({});
  const [myId, setMyID] = useState("");
  const [callerId, setCallerId] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [incoming, setIncoming] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);

  const socket = useRef<any>();
  const userVideo = useRef<any>();

  useEffect(() => {
    socket.current = io.connect("/");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((fullStream) => {
        setStream(fullStream);
        if (userVideo.current) {
          userVideo.current.srcObject = fullStream;
        }
      });
  }, []);

  return (
    <div>
      <h1> Tis is Meet Page </h1>
      {stream && <video ref={userVideo} autoPlay muted playsInline />}
    </div>
  );
}

export default Meet;
