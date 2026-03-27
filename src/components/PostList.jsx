import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import PostCount from "./PostCount";
import LoadingSpinner from "./LoadingSpinner";

function PostList({ favorites = [], onToggleFavorite = () => {} }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // state สำหรับ loading
  const [error, setError] = useState(null); // state สำหรับ error
  const [search, setSearch] = useState(""); // state เก็บคำค้นหา

  // ⭐ แยก fetch ออกมาเป็น function (ใช้ซ้ำได้)
  // ฟังก์ชัน async สำหรับ fetch ข้อมูลจาก API
  async function fetchPosts() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      // ถ้า response ไม่ ok ให้โยน error
      if (!res.ok) throw new Error("ดึงข้อมูลไม่สำเร็จ");

      const data = await res.json();

      // เก็บข้อมูล 20 รายการแรกลง state
      setPosts(data.slice(0, 20)); // เอา 20 อัน
    } catch (err) {
      setError(err.message); // เก็บ error
    } finally {
      setLoading(false); // โหลดเสร็จ (ไม่ว่าจะสำเร็จหรือ error)
    }
  }

  // โหลดครั้งแรก
  useEffect(() => {
    fetchPosts();
  }, []); // [] = ทำครั้งเดียวตอน component โหลด

  // กรองโพสต์ตามคำค้น
  const filtered = posts.filter(
    (post) => (post?.title || "").toLowerCase().includes(search.toLowerCase()), // ✅ กัน title undefined
  );

  // ✅ แสดง loading ก่อน
  if (loading) return <LoadingSpinner />;
  // ✅ แสดง error ถ้ามีปัญหา
  if (error) {
    return <p style={{ color: "red" }}>เกิดข้อผิดพลาด: {error}</p>;
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      {/* หัวข้อ + ปุ่มโหลดใหม่ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#2d3748",
            borderBottom: "2px solid #1e40af",
            paddingBottom: "0.5rem",
          }}
        >
          โพสต์ล่าสุด
        </h2>

        {/* ⭐ ปุ่มโหลดใหม่ */}
        <button
          onClick={fetchPosts} // เรียก function เดิม
          style={{
            cursor: "pointer",
            padding: "0.4rem 0.8rem",
            borderRadius: "6px",
            border: "1px solid #ffffff",
            background: "#1e40af",
            color: "#ffffff",
          }}
        >
          🔄 โหลดใหม่
        </button>
      </div>

      {/* จำนวนโพสต์ */}
      <PostCount count={filtered.length} />

      {/* ช่องค้นหา */}
      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem 0.75rem",
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          fontSize: "1rem",
          marginBottom: "1rem",
          boxSizing: "border-box",
        }}
      />

      {/* ถ้าไม่เจอโพสต์ */}
      {filtered.length === 0 && (
        <p style={{ color: "#718096", textAlign: "center", padding: "2rem" }}>
          ไม่พบโพสต์ที่ค้นหา
        </p>
      )}

      {/* แสดงโพสต์ */}
      {filtered.map((post) => {
        const isFavorite =
          Array.isArray(favorites) && post?.id != null
            ? favorites.includes(post.id) // ✅ กัน undefined
            : false;

        return (
          <PostCard
            key={post.id}
            post={post}
            isFavorite={isFavorite}
            onToggleFavorite={() => onToggleFavorite(post.id)}
          />
        );
      })}
    </div>
  );
}

export default PostList;
