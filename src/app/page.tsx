import { useState } from 'react';
import { GraduationCap, BookOpen, Users, Award, Menu, X } from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Best Foundation School
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">About</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Features</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Contact</a>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Best Foundation School
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Building Tomorrow's Leaders Through Excellence in Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Student Portal
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg">
              Teacher Portal
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Platform Features
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Quizzes</h3>
            <p className="text-gray-600">Take quizzes from Primary 1 to SS3</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Award className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Practice</h3>
            <p className="text-gray-600">Unlimited practice questions</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">View Results</h3>
            <p className="text-gray-600">Access scores and download reports</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <GraduationCap className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teacher Tools</h3>
            <p className="text-gray-600">Create quizzes and manage results</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 Best Foundation School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
