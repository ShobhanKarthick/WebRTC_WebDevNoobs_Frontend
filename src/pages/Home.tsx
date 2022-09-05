import { BrowserRouter as Router, Outlet } from "react-router-dom";
import HomeTopBar from "../components/Home/HomeTopBar";

function Home() {
  return (
    <div className="home-page">
      <HomeTopBar />
      <Outlet />
    </div>
  );
}

export default Home;
