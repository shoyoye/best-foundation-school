import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Book, Brain, CheckCircle, Users, School, Mail, Phone, MapPin, LogIn, Menu, X } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client (make sure env vars are set in Cloudflare Pages)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Check role after login
  const checkRoleAndRedirect = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) return;

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
      return;
    }

    if (profile.role === 'teacher') router.push('/teacher-dashboard');
    else router.push('/student-dashboard');
  };

  // Handle login
  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // Redirect based on role
    await checkRoleAndRedirect();
  };

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
            <div className="hidden md:flex items-center space-x-2">
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-1 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="px-2 py-1 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleLogin}
                disabled={loading}
                className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition flex items-center"
              >
                <LogIn className="h-5 w-5 mr-2" />
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
