import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../routes';
import Avatar from './Avatar';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { text: 'About us', to: `${ROUTES.ABOUT}` },
    { text: 'Services', to: `${ROUTES.SERVICES}` },
    { text: 'Contact', to: `${ROUTES.CONTACT}` },
    { text: 'Join us', to: `${ROUTES.JOINUS}` },
    { text: 'Faqs', to: `${ROUTES.FAQS}` },
  ];

  const activeClass = 'border-b-2 border-b-primary';
  const inactiveClass = '';

  return (
    <nav className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-16">
          <div className="md:hidden">
            <Avatar src={'/img/fb-btn.svg'} alt="" size={'24'} />
          </div>
          <div>
            <Link to={ROUTES.HOME}>
              <Avatar src={'/img/main-logo.svg'} alt="" size={'72'} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link, i) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className={`text-primary px-3 py-2 text-sm font-bold lowercase ${
                    location.pathname === link.to ? activeClass : inactiveClass
                  } ${i > 0 && 'ml-4'}`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            {showMenu ? (
              <button
                className="flex text-4xl items-center cursor-pointer fixed right-10 top-6 z-50"
                onClick={() => setShowMenu(!showMenu)}
              >
                <Avatar src={'/img/close-btn.svg'} alt="" size={'18'} />
              </button>
            ) : (
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="inline-flex items-center justify-center fixed p-2 z-30 right-10 top-6"
              >
                <Avatar src={'/img/menu-btn.svg'} alt="" size={'18'} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu open: "block", Menu closed: "hidden" */}
      <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
        <div
          className={`top-0 right-0 w-[70vw] bg-overlay pt-8 pl-4 text-white fixed h-full z-40  ease-in-out duration-300 ${
            showMenu ? 'translate-x-0 ' : 'translate-x-full'
          }`}
        >
          {links.map((link, i) => (
            <Link
              key={link.text}
              to={link.to}
              className={`block px-3 py-2 text-xs font-bold lowercase ${
                location.pathname === link.to ? activeClass : inactiveClass
              } ${i > 0 && 'mt-1'}`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
