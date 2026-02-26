import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">CloudDrive</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/upload" className="hover:text-blue-600 transition">Upload</Link>
        <Link to="/files" className="hover:text-blue-600 transition">My Files</Link>
      </div>
    </nav>
  );
}