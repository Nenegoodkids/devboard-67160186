function UserCard({ name, email }) {
  // 1. ดึงตัวอักษรแรกมาทำ avatar เหมือนเดิม
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // 2. คำนวณรหัสตัวเลขจากตัวอักษรแรก แล้วหารเอาเศษด้วย 3
  const charCode = name.charCodeAt(0);
  const colorIndex = charCode % 3;

  // 3. กำหนดสีพื้นหลัง (bgColor) โดยใช้ switch/case ตรวจสอบผลลัพธ์ที่ได้
  let bgColor;
  switch (colorIndex) {
    case 0:
      bgColor = "#1e40af";
      break;
    case 1:
      bgColor = "#047857";
      break;
    case 2:
      bgColor = "#6d28d9";
      break;
    default:
      bgColor = "#1e40af";
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
          background: bgColor, // 4. เปลี่ยนค่า background ตรงนี้ให้ใช้ตัวแปร bgColor
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        {initials}
      </div>
      <div>
        <div style={{ fontWeight: "bold", color: "#2d3748" }}>{name}</div>
        <div style={{ fontSize: "0.85rem", color: "#718096" }}>{email}</div>
      </div>
    </div>
  );
}

export default UserCard;
