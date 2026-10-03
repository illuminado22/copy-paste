import { Link } from "react-router-dom";
import { members } from "../data/members";
import Avatar from "../components/Avatar";

export default function Home() {
  const scrollToTeam = () =>
    document.getElementById("team").scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section className="hero">
        <p className="hero-tag">&gt; hello, world_</p>
        <h1>We are <span>Group ReNe</span></h1>
        <p className="hero-sub">
          This project showcases automation using Ansible and Docker fundamentals.
        </p>
        <button className="hero-btn" onClick={scrollToTeam}>Meet the team ↓</button>
      </section>

      <section id="team" className="team">
        <h2>The Team</h2>
        <div className="team-row">
          {members.map((m) => (
            <Link key={m.id} to={`/member/${m.id}`} className="team-member">
              <Avatar member={m} size={170} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}