import React, { useEffect, useState } from "react";
import api from "../api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [due, setDue] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("-1"); // -1 = High first, 1 = Low first

  async function fetchTasks(order = sortOrder) {
    try {
      setLoading(true);
      const res = await api.get(`/tasks?sort_by=priority_value&order=${order}`);
      setTasks(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [sortOrder]);

  async function handleAdd(e) {
    e.preventDefault();
    try {
      await api.post("/tasks", { title, priority, due });
      setTitle("");
      setPriority("Medium");
      setDue("");
      fetchTasks();
    } catch (err) {
      console.error(err);
      alert("Could not add task");
    }
  }

  async function markDone(id) {
    try {
      await api.put(`/tasks/${id}/done`);
      fetchTasks();
    } catch (err) {
      console.error(err);
      alert("Could not mark done");
    }
  }

  async function handleDelete(id) {
    try {
      if (!confirm("Delete this task?")) return;
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
      alert("Could not delete");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600">Your Tasks ✅</h2>
          <select
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="-1">High Priority First</option>
            <option value="1">Low Priority First</option>
          </select>
        </div>

        {/* Add Task Form */}
        <form
          onSubmit={handleAdd}
          className="mb-8 flex flex-wrap gap-3 items-center"
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <input
            value={due}
            onChange={(e) => setDue(e.target.value)}
            type="date"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
            Add
          </button>
        </form>

        {/* Tasks List */}
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <ul className="space-y-4">
            {tasks.length === 0 && (
              <div className="text-center text-gray-500">No tasks yet</div>
            )}
            {tasks.map((t) => (
              <li
                key={t._id}
                className="flex justify-between items-center bg-gray-50 border rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div>
                  <div
                    className={`${
                      t.done ? "line-through text-gray-500" : "text-gray-800"
                    } font-semibold text-lg`}
                  >
                    {t.title}
                  </div>
                  <div className="text-sm text-gray-600 flex gap-3">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${
                        t.priority === "High"
                          ? "bg-red-500"
                          : t.priority === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {t.priority}
                    </span>
                    <span>Due: {t.due || "—"}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {!t.done && (
                    <button
                      onClick={() => markDone(t._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                    >
                      Done
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
