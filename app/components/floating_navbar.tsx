'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
    isMore: true,
  },
];

const moreMenuItems = [
  { title: 'Home', subtitle: 'Home is where the monk lives' },
  { title: 'About us', subtitle: 'The journey of Design Monks' },
  { title: 'Meet the team', subtitle: 'An overview of the Monk family' },
  { title: 'Blogs', subtitle: 'A collection of informative blogs' },
  {
    title: 'Career',
    subtitle: 'Work with top global brands, grow your skills',
  },
  {
    title: 'Contact us',
    subtitle: 'Start your dream design journey from here',
  },
];

export default function FloatingNavbar() {
  return (
    <nav className='fixed sm:bottom-6 bottom-0 left-1/2 transform -translate-x-1/2 z-[70]'>
      <div className='bg-black/90 backdrop-blur-md rounded-2xl border-t-green-900 border-t-4 border border-x-green-950 border-b-0 px-2 py-2 flex items-center gap-1 min-w-[100vw] max-w-2xl sm:min-w-[600px] sm:px-4 sm:gap-2'>
        {navItems.map((item, index) =>
          item.isMore ? (
            <MoreSheet key={index} />
          ) : (
            <NavItem key={index} item={item} />
          )
        )}
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

function MoreSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='flex-1 flex flex-col items-center justify-center sm:flex-row py-2 px-1 text-gray-400 hover:text-purple-500 transition-colors duration-200 group'>
          <HiOutlineEllipsisHorizontal className='w-5 h-5 mb-1 sm:hidden group-hover:scale-110 transition-transform duration-200' />
          <span className='text-xs font-medium sm:text-base sm:font-bold'>
            More
          </span>
        </button>
      </SheetTrigger>
      <SheetContent
        side='bottom'
        className='rounded-t-2xl p-0 w-full max-w-md mx-auto border-none shadow-2xl pt-2 pb-6 z-[50]'
        style={{ bottom: '64px' }}
      >
        <div className='flex flex-col divide-y divide-gray-200'>
          {moreMenuItems.map((item) => (
            <button
              key={item.title}
              className='w-full text-left px-6 py-4 bg-white hover:bg-gray-100 focus:bg-gray-100 transition-colors outline-none'
              onClick={() => {
                const evt = new CustomEvent('close-sheet');
                window.dispatchEvent(evt);
              }}
            >
              <div className='text-base font-semibold text-black'>
                {item.title}
              </div>
              <div className='text-xs text-gray-500'>{item.subtitle}</div>
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
