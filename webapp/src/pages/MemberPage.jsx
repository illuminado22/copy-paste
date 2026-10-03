import Avatar from "../components/Avatar";
import { useParams } from "react-router-dom";
import { members } from "../data/members";

const termLabels = { prelim: "Prelim", midterm: "Midterm", finals: "Finals" };

export default function MemberPage() {
  const { id } = useParams();
  const member = members.find((m) => m.id === id);

  if (!member) return <h2>Member not found.</h2>;

  return (
    <section className="container">
      <header className="profile">
        <Avatar member={member} size={140} />
        <div>
          <h1>{member.name}</h1>
          <h3>{member.role}</h3>
          <p>{member.bio}</p>
        </div>
      </header>

      <h2>Hands-On Activities</h2>
      {Object.entries(member.hoa).map(([term, items]) => (
        <div key={term}>
          <h3>{termLabels[term]} HOA</h3>
          <div className="grid">
            {items.length === 0 && <p>No entries yet.</p>}
            {items.map((h, i) => (
              <div className="card" key={i}>
                <h4>{h.title}</h4>
                <p>{h.summary}</p>
                {h.file && <a href={h.file} target="_blank" rel="noreferrer">View file</a>}
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2>Exams</h2>
      <div className="grid">
        {Object.entries(member.exams).map(([term, e]) => (
          <div className="card" key={term}>
            <h4>{termLabels[term] || "Final"} Exam</h4>
            <p>{e.summary || "No entry yet."}</p>
            {e.file && <a href={e.file} target="_blank" rel="noreferrer">View file</a>}
          </div>
        ))}
      </div>

      <h2>Reflection and Learnings</h2>
      <p>{member.reflection || "No entry yet."}</p>
    </section>
  );
}