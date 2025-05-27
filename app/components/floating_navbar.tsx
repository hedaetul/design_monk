'use client';
import {
  HiOutlineBriefcase,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCog6Tooth,
  HiOutlineCurrencyDollar,
  HiOutlineEllipsisHorizontal,
} from 'react-icons/hi2';

const navItems = [
  {
    label: 'Work',
    icon: HiOutlineBriefcase,
    href: '/work',
  },
  {
    label: 'Services',
    icon: HiOutlineCog6Tooth,
    href: '/services',
  },
  {
    label: 'Start a Project',
    icon: HiOutlineChatBubbleLeftRight,
    href: '/start-project',
    isActive: true,
  },
  {
    label: 'Pricing',
    icon: HiOutlineCurrencyDollar,
    href: '/pricing',
  },
  {
    label: 'More',
    icon: HiOutlineEllipsisHorizontal,
    href: '/more',
  },
];

export default function FloatingNavbar() {
  return (
    <nav className='fixed  sm:bottom-6 bottom-0 left-1/2 transform -translate-x-1/2 z-50'>
      <div className='bg-black/90 backdrop-blur-md rounded-2xl border-t-green-900 border-t-4 border border-x-green-950 border-b-0  px-2 py-2 flex items-center gap-1 min-w-[100vw] max-w-2xl sm:min-w-[600px] sm:px-4 sm:gap-2'>
        {navItems.map((item, index) => (
          <NavItem key={item.label} item={item} />
        ))}
      </div>
    </nav>
  );
}

function NavItem({ item }: { item: (typeof navItems)[0] }) {
  const Icon = item.icon;

  if (item.isActive) {
    return (
      <div className='relative flex-1 flex justify-center'>
        {/* Elevated circular button */}
        <div className='absolute sm:top-0 -top-[65%] left-1/2 transform -translate-x-1/2'>
          <button className='relative px-4 py-2 border border-white rounded-lg bg-black/90 flex items-center justify-center text-white gap-2 hover:border-gray-400 transition-colors overflow-hidden group'>
            <HiOutlineChatBubbleLeftRight className='w-4 h-4 z-10' />
            <span className='text-sm font-medium whitespace-nowrap sm:inline hidden z-10'>
              {item.label}
            </span>

            {/* Animated purple border overlay */}
            {/* Animated purple border overlay */}
            <span className='absolute inset-0 animate-borderGlow rounded-lg pointer-events-none'></span>
          </button>
        </div>
        {/* Spacer to maintain navbar height */}
        <div className='h-12 w-full'></div>
      </div>
    );
  }

  return (
    <button className='flex-1 flex flex-col items-center justify-center sm:flex-row py-2 px-1 text-gray-400 hover:text-purple-500 transition-colors duration-200 group'>
      <Icon className='w-5 h-5 mb-1 sm:hidden group-hover:scale-110 transition-transform duration-200' />
      <span className='text-xs font-medium sm:text-base sm:font-bold'>
        {item.label}
      </span>
    </button>
  );
}
