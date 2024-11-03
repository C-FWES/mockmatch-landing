// src/app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  const handleSignupRedirect = () => {
    router.push('/signup');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="MockMatch Logo" width={40} height={40} />
            <span className="text-xl font-bold text-[#2E9BFF]">MockMatch</span>
          </Link>
          {/* Navigation */}
          <nav className="flex space-x-6">
            <a href="#about" className="text-[#2E9BFF] hover:text-[#FF761F]">
              About
            </a>
            <a href="#signup" className="text-[#2E9BFF] hover:text-[#FF761F]">
              Signup
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-[64px]">
        {/* About Section */}
        <section id="about" className="flex flex-col scroll-mt-16">
          {/* Image 1 */}
          <div className="w-full">
            <Image
              src="/about1.png"
              alt="About Image 1"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* Image 2 */}
          <div className="w-full">
            <Image
              src="/about2.png"
              alt="About Image 2"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          {/* Image 3 */}
          <div className="w-full">
            <Image
              src="/about3.png"
              alt="About Image 3"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          {/* Image 4 */}
          <div className="w-full">
            <Image
              src="/about4.png"
              alt="About Image 4"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          {/* Image 4 */}
          {/* Image 5 */}
          <div className="w-full">
            <Image
              src="/about5.png"
              alt="About Image 5"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          {/* Image 6 */}
          <div className="w-full">
            <Image
              src="/about6.png"
              alt="About Image 6"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </section>

{/* Signup Section */}
<section id="signup" className="flex items-center justify-center py-12 scroll-mt-16">
          <button
            onClick={handleSignupRedirect}
            className="bg-[#FF761F] text-white py-3 px-6 rounded hover:bg-[#2E9BFF] font-bold"
          >
            Sign Up for Updates
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2E9BFF] text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} MockMatch. All rights reserved.</p>
      </footer>
    </div>
  );
}
