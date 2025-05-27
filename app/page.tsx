'use client';
import FloatingNavbar from '@/app/components/floating_navbar';

export default function Home() {
  return (
    <div className='relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-black via-gray-900 to-black'>
      <main className='flex-1 flex items-center justify-center'>
        <h1 className='text-3xl font-bold text-white'>This is homepage</h1>
      </main>
      <FloatingNavbar />
    </div>
  );
}
