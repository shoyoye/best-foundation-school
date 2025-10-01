import { Book, Brain, BarChart2, Users, LogIn, School, Target, BookOpen, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hook for mobile menu toggle

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* 1. Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <School className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-blue-600">Best Foundation School</span>
            </div>
            {/* Menu Items - Desktop */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            {/* Login Button */}
            <div className="hidden md:flex items-center">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </button>
            </div>
            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#features" className="block text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition">Contact</a>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </button>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Best Foundation School</h1>
          <p className="text-xl md:text-2xl mb-8">Building Tomorrow's Leaders Through Excellence in Education</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Student Portal
            </button>
            <button className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Teacher Portal
            </button>
          </div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <Book className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">Online Quizzes</h3>
              <p className="text-gray-600 text-center">Engage in interactive quizzes to test your knowledge.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <Brain className="h-12 w-12 text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">AI Practice</h3>
              <p className="text-gray-600 text-center">Personalized AI-driven practice sessions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <BarChart2 className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">View Results</h3>
              <p className="text-gray-600 text-center">Track and analyze your performance easily.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <Users className="h-12 w-12 text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">Teacher Management</h3>
              <p className="text-gray-600 text-center">Efficient tools for teachers to manage classes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold">150+</h3>
              <p className="text-lg">Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">12</h3>
              <p className="text-lg">Classes</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">15</h3>
              <p className="text-lg">Subjects</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. About Section */}
      <section id="about" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">To provide quality education that empowers students from Primary 1 to SS3 to become leaders in Nigeria and beyond.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">A world where every child has access to excellent, innovative learning experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Best Foundation School. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300 transition"><Globe className="h-6 w-6" /></a>
            {/* Add more social icons if needed */}
          </div>
        </div>
      </footer>
    </div>
  );
}

// Custom animation for hero (using Tailwind's animate utility)
<style jsx global>{`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
`}</style>
