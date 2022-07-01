import { GiAtomicSlashes } from 'react-icons/gi';
import {
  BsInstagram,
  BsTwitch,
  BsFacebook,
  BsYoutube,
  BsDiscord,
  BsTelegram,
  BsTwitter,
} from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="body-font bg-neutral text-neutral-content">
      <div className="container mx-auto flex flex-col flex-wrap py-20 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <a className="footer-title flex items-center justify-center md:justify-start">
            <div className="flex items-center gap-x-2 text-xl">
              <GiAtomicSlashes size={32} className="text-secondary" />
              TEAM SFOS
            </div>
          </a>
          <p className="mt-2 text-sm">let's join us!</p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="footer-title">Services</h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="link link-hover">Branding</a>
              </li>
              <li>
                <a className="link link-hover">Design</a>
              </li>
              <li>
                <a className="link link-hover">Marketing</a>
              </li>
              <li>
                <a className="link link-hover">Advertisement</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="footer-title">Company</h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="link link-hover">About us</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
              <li>
                <a className="link link-hover">Jobs</a>
              </li>
              <li>
                <a className="link link-hover">Press kit</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="footer-title">Legal</h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="link link-hover">Terms of use</a>
              </li>
              <li>
                <a className="link link-hover">Privacy policy</a>
              </li>
              <li>
                <a className="link link-hover">Cookie policy</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-base-300">
        <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p className="text-center text-sm sm:text-left">
            © 2022 Team SFOS — All right reserved.
          </p>
          <span className="mt-2 inline-flex justify-center gap-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <a>
              <BsInstagram size={20} />
            </a>
            <a>
              <BsFacebook size={20} />
            </a>
            <a>
              <BsTwitter size={20} />
            </a>
            <a>
              <BsYoutube size={20} />
            </a>
            <a>
              <BsTelegram size={20} />
            </a>
            <a>
              <BsDiscord size={20} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
