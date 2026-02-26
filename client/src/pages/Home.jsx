import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">CloudDrive</span>
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Securely upload, manage and access your files anytime, anywhere.
        </p>

        <div className="space-x-4">
          <Link
            to="/upload"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Upload Files
          </Link>

          <Link
            to="/files"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            View My Files
          </Link>
        </div>

        {/* Feature Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Feature title="Fast Uploads" desc="Upload images, PDFs and documents instantly." />
          <Feature title="Cloud Storage" desc="Stored securely in Cloudinary cloud." />
          <Feature title="Access Anywhere" desc="View files from any device anytime." />
        </div>
      </div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}