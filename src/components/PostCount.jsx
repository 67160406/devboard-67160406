function PostCount({ count }) {
  //“รับค่า” จากพ่อ (PostList)
  return (
    <p
      style={{
        margin: "0.5rem 0 1.5rem",
        color: "#4a5568",
        fontSize: "0.9rem",
      }}
    >
      โพสต์ทั้งหมด: {count} รายการ
    </p> //React จะเอาค่าที่ส่งมาใส่ตรงนี้
  );
}

export default PostCount;
