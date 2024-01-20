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
      {isNavVisible && (
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
          {navItems.map((item, index) => (
            <NavItem key={index} href={item.href} text={item.text} />
          ))}
        </nav>
      )}
    </div>
  );
}
