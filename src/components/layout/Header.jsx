import { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { GiAtomicSlashes } from 'react-icons/gi';
import useScrollspy from '../../hooks/useScrollspy';

export default function Header() {
  const [swap, setSwap] = useState(false);
  const posY = useScrollspy();
  return (
    <header
      className={`rounded-b-box fixed inset-x-0 top-0 z-50 h-fit backdrop-blur transition duration-300 ${
        posY > 100 ? 'shadow' : ''
      }`}
    >
      <div className="container navbar min-h-min">
        <div className="navbar-start">
          <div className="btn btn-ghost btn-sm gap-x-2">
            <GiAtomicSlashes size={24} className="animate-spin" />
            TEAM SFOS
          </div>
        </div>
        <div className="navbar-end">
          <button
            className={`swap-rotate btn swap btn-primary btn-circle md:hidden ${
              swap ? 'swap-active' : ''
            }`}
            onClick={() => setSwap(!swap)}
          >
            <CgMenuRight className="swap-off" size={24} />
            <CgClose className="swap-on" size={24} />
          </button>
          <ul
            className={`menu rounded-box menu-compact absolute -bottom-36 gap-2 bg-base-100 p-2 shadow-md transition-all duration-500 md:menu-horizontal md:static md:bg-transparent md:p-0 md:shadow-none [&>li>a]:rounded [&>li>a]:uppercase ${
              swap ? 'right-4' : '-right-36'
            } `}
          >
            <li>
              <a href="#hero" data-scrollspy className="active">
                home
              </a>
            </li>
            <li>
              <a href="#about" data-scrollspy>
                about us
              </a>
            </li>
            <li>
              <a href="#team" data-scrollspy>
                our team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
