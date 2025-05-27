import Avatar from "./components/ui/Avatar";
import Button from "./components/ui/Button";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./components/dashboard/Dashboard";

import avatar from "../src/assets/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg";

import { FaPlus } from "react-icons/fa6";

import "./App.css";
import Calendar from "./components/calendar/Calendar";

export default function App() {
  return (
    <div className="mainContainer">
      <div className="subContainer">
        <aside className="sidebarWrapper">
          <Sidebar />
        </aside>
        <main className="mainContent">
          <Header />
          <Dashboard />
        </main>
        <section className="sideContainer">
          <div className="avatarButton">
            <Avatar>
              <img src={avatar} alt="avatar icon..." className="img" />
            </Avatar>
            <Button>
              <FaPlus />
            </Button>
          </div>
          <Calendar />
        </section>
      </div>
    </div>
  );
}
