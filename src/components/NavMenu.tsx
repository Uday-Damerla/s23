import { useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import header from '../images/header.png';
import NavItem from './NavItem';

export const navItems = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/about',
    text: 'About Us',
  },
  {
    href: '/events',
    text: 'Workshops & Events',
  },
  {
    href: '/gallery',
    text: 'Gallery',
  },
  {
    href: '/ourteam',
    text: 'Organizing Committee',
  },
  {
    href: '/sponsors',
    text: 'Sponsors',
  },
];


export default function NavMenu({ className }: { className?: string }) {
  const [isNavVisible, setNavVisible] = useState(false);

  const handleHeaderClick = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className={className}>
      <div onClick={handleHeaderClick} style={{ margin: 0, padding: 0 }}>
        <Image src={header} alt="header" height={170} />
      </div>
      <nav className="hidden lg:flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
        {navItems.map((item, index) => (
          <NavItem key={index} href={item.href} text={item.text} />
        ))}
      </nav>
      <Transition show={isNavVisible} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-gray-800 lg:hidden"
          onClose={setNavVisible}
        >
          <div className="min-h-screen px-4 text-center text-gray-200">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Navigation
                </Dialog.Title>
                <div className="mt-2">
                  <nav>
                    {navItems.map((item, index) => (
                      <NavItem key={index} href={item.href} text={item.text} />
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
