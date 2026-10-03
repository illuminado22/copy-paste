import { NavLink } from "react-router-dom";
import { members } from "../data/members";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      {members.map((m) => (
        <NavLink key={m.id} to={`/member/${m.id}`}>{m.name}</NavLink>
      ))}
    </nav>
  );
}