import { useState } from "react";
import axios from "axios";

export default function UploadCard({ refresh }) {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  const uploadFile = async () => {
    if (!file) {
      setMsg("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/upload", formData);
      setMsg("✅ File uploaded successfully");
      refresh();
    } catch {
      setMsg("❌ Upload failed");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-xl font-semibold mb-4">Upload to Cloud</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={uploadFile}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Upload
      </button>

      {msg && <p className="mt-4 text-sm">{msg}</p>}
    </div>
  );
}