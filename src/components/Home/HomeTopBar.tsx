import { useContext } from "react";
import { UserContext } from "../../shared/UserContext";

function HomeTopBar() {
  // const { user } = useContext(UserContext);
  return (
    <div className="home-top-bar">
      <h4>Web Dev Noobs Meet</h4>
      {/*user == "" ? <h4>Hi there!</h4> : <h4>Hi {user}</h4> */}
      Hi Shobhan Karthick!
    </div>
  );
}

export default HomeTopBar;
