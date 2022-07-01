import { useEffect, useState } from 'react';

export default function (className = 'active') {
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const listerner = () => {
      const links = document.querySelectorAll('[data-scrollspy]');
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      setPosY(scrollPos);
      links.forEach((link) => {
        const elem = document.querySelector(link.getAttribute('href'));

        elem.offsetTop <= scrollPos &&
        elem.offsetTop + elem.clientHeight > scrollPos
          ? link.classList.add(className)
          : link.classList.remove(className);
      });
    };
    window.addEventListener('scroll', listerner);
    return () => window.removeEventListener('scroll', listerner);
  }, []);

  return posY;
}
