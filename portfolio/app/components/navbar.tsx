import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa'; // Importing the profile icon

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
            {/* Profile Section */}
            <div className="flex items-center">
                <FaUserCircle size={30} className="mr-2" />
                <h2 className="text-xl font-bold">Profile</h2>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6">
                <Link href="/" className="hover:text-blue-400">Home</Link>
                <Link href="/about" className="hover:text-blue-400">About</Link>
                <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                <Link href="/projects" className="hover:text-blue-400">Projects</Link>
            </div>
        </nav>
    );
};

export default Navbar;
