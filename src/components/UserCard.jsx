function UserCard({ name, email }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const firstChar = name.charAt(0).toUpperCase(); // ดึงตัวแรก + แปลงเป็นตัวใหญ่
  let avatarColor = "#1e40af";

  if (firstChar >= "A" && firstChar <= "G") {
    avatarColor = "#1e40af";
  } else if (firstChar >= "H" && firstChar <= "N") {
    avatarColor = "#16a34a";
  } else if (firstChar >= "O" && firstChar <= "Z") {
    avatarColor = "#7c3aed";
  } else {
    avatarColor = "#1c89c4";
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
        background: "white",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          background: avatarColor,
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        {initials}
      </div>

      <div>
        {/* ชื่อผู้ใช้ */}
        <div
          style={{
            fontWeight: "bold",
            color: "#2d3748", // ✅ เพิ่มสีตรงนี้ แก้ปัญหาตัวหนังสือขาว
          }}
        >
          {name}
        </div>

        {/* อีเมล */}
        <div
          style={{
            fontSize: "0.85rem",
            color: "#718096",
          }}
        >
          {email}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
