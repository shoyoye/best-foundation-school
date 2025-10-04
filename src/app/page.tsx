import React, { useState } from 'react';
import { Book, Brain, CheckCircle, Users, School, Mail, Phone, MapPin, LogIn, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <School className="h-8 w-8 text-violet-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Best Foundation School</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-violet-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-violet-600 transition">About</a>
              <a href="#features" className="text-gray-700 hover:text-violet-600 transition">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-violet-600 transition">Contact</a>
            </div>

            {/* Login Button */}
            <div className="hidden md:flex items-center">
              <button className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition flex items-center">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-violet-600 transition">Home</a>
                <a href="#about" className="text-gray-700 hover:text-violet-600 transition">About</a>
                <a href="#features" className="text-gray-700 hover:text-violet-600 transition">Features</a>
                <a href="#contact" className="text-gray-700 hover:text-violet-600 transition">Contact</a>
                <button className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition flex items-center justify-center">
                  <LogIn className="h-5 w-5 mr-2" />
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-violet-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Best Foundation School
          </h1>
          <p className="text-xl sm:text-2xl mb-8 animate-fade-in delay-200">
            Building Tomorrow's Leaders Through Excellence in Education
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/student-portal" className="bg-white text-violet-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition animate-fade-in delay-400">
              Student Portal
            </a>
            <a href="/teacher-portal" className="bg-white text-violet-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition animate-fade-in delay-400">
              Teacher Portal
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform hover:scale-105">
              <Book className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Online Quizzes</h3>
              <p className="text-gray-600 text-center">Engage in interactive quizzes to test your knowledge across subjects.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform hover:scale-105">
              <Brain className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">AI Practice</h3>
              <p className="text-gray-600 text-center">Personalized AI-driven practice sessions for better learning.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform hover:scale-105">
              <CheckCircle className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">View Results</h3>
              <p className="text-gray-600 text-center">Track your progress and view detailed results instantly.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform hover:scale-105">
              <Users className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Teacher Management</h3>
              <p className="text-gray-600 text-center">Tools for teachers to manage classes and students efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-violet-600">150+</p>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-violet-600">12</p>
              <p className="text-gray-600">Classes</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-violet-600">15</p>
              <p className="text-gray-600">Subjects</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Us</h2>
          <div className="prose mx-auto max-w-3xl text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>To provide high-quality education that empowers students from Primary 1 to SS3 to achieve their full potential and become responsible leaders in Nigeria and beyond.</p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h3>
            <p>To be the leading secondary school in Nigeria, fostering excellence in academics, character development, and innovation through a supportive and inclusive learning environment.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-violet-600 mr-4" />
              <div>
                <p className="font-semibold">Email</p>
                <p>info@bestfoundationschool.ng</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-violet-600 mr-4" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+234 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-start md:col-span-2">
              <MapPin className="h-6 w-6 text-violet-600 mr-4" />
              <div>
                <p className="font-semibold">Address</p>
                <p>123 Education Street, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Best Foundation School. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#home" className="hover:text-violet-300 transition">Home</a>
              <a href="#about" className="hover:text-violet-300 transition">About</a>
              <a href="#features" className="hover:text-violet-300 transition">Features</a>
              <a href="#contact" className="hover:text-violet-300 transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
