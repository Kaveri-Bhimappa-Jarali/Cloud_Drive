import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Select file first");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/upload", formData);
      alert("File Uploaded Successfully 🎉");
      setFile(null);
    } catch (err) {
      alert("Upload failed ❌");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Upload to Cloud</h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-6"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Uploading..." : "Upload File"}
        </button>
      </div>
    </div>
  );
}