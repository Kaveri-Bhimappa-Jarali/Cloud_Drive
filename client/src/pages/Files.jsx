import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Files() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/files");
      setFiles(res.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Files</h1>
        <Link
          to="/upload"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Upload File
        </Link>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-gray-600">Loading files...</p>
      )}

      {/* Empty State */}
      {!loading && files.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            No files uploaded yet.
          </p>
          <Link
            to="/upload"
            className="text-blue-600 hover:underline"
          >
            Upload your first file
          </Link>
        </div>
      )}

      {/* File List */}
      {!loading && files.length > 0 && (
        <div className="bg-white rounded shadow">
          {files.map((file, index) => (
            <div
              key={file._id}
              className={`flex justify-between items-center p-4 ${
                index !== files.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="truncate">
                {file.filename}
              </span>

              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}