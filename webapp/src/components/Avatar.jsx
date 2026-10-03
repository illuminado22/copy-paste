export default function Avatar({ member, size = 160 }) {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      {member.photo ? (
        <img src={member.photo} alt={member.name} />
      ) : (
        <span>{member.name[0]}</span>
      )}
    </div>
  );
}