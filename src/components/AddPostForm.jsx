import { useState } from "react";

function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const maxTitle = 100;
  const remaining = maxTitle - title.length;

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !body.trim()) return;

    onAddPost({ title, body });

    setTitle("");
    setBody("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1.25rem",
        marginBottom: "1.5rem",
        background: "#f7fafc",
      }}
    >
      <h3
        style={{
          margin: "0 0 1rem",
          color: "#2d3748",
          fontSize: "1.2rem",
        }}
      >
        เพิ่มโพสต์ใหม่
      </h3>

      {/* ช่องกรอกหัวข้อ */}
      <input
        type="text"
        placeholder="พิมพ์หัวข้อโพสต์..."
        value={title}
        maxLength={100}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "0.55rem 0.65rem",
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          fontSize: "0.95rem",
          boxSizing: "border-box",
          marginBottom: "0.25rem",
        }}
      />

      {/* เนื้อหาโพสต์ */}
      <textarea
        placeholder="เนื้อหาโพสต์"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        style={{
          width: "100%",
          padding: "0.55rem 0.65rem",
          marginBottom: "1rem",
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          fontSize: "0.95rem",
          resize: "vertical",
          boxSizing: "border-box",
        }}
      />

      <button
        type="submit"
        style={{
          background: "#1e40af",
          color: "white",
          border: "none",
          padding: "0.55rem 1.6rem",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "0.95rem",
        }}
      >
        โพสต์
      </button>
    </form>
  );
}

export default AddPostForm;
