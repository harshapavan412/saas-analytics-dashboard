import { useEffect, useState } from "react";

const USERS_PER_PAGE = 5;

const ActivityTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="table-container">Loading users...</div>;
  }

  if (error) {
    return <div className="table-container">Error: {error}</div>;
  }

  // 🔎 Filtered users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination logic
  const indexOfLastUser = currentPage * USERS_PER_PAGE;
  const indexOfFirstUser = indexOfLastUser - USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  return (
    <div className="table-container">
      <h2 style={{ marginBottom: "20px" }}>Users (Live API)</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        style={{
          marginBottom: "20px",
          padding: "8px",
          width: "250px",
        }}
      />

      <table className="activity-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📄 Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ActivityTable;