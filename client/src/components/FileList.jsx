import { useEffect, useState } from "react";
import axios from "axios";

export default function FileList({ files, setFiles }) {
  useEffect(() => {
    axios.get("http://localhost:5000/files")
      .then(res => setFiles(res.data));
  }, [setFiles]);

  return (
    <div className="bg-white shadow rounded-xl p-6 mt-8">
      <h2 className="text-lg font-semibold mb-4">Uploaded Files</h2>

      {files.length === 0 ? (
        <p className="text-gray-500">No files uploaded yet.</p>
      ) : (
        <ul className="space-y-2">
          {files.map(file => (
            <li key={file._id} className="flex justify-between border-b pb-2">
              <span>{file.filename}</span>
              <a
                href={file.url}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                View
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}