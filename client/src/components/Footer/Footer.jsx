import React from 'react';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 px-4">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Dr. Priyanka Maurya Homeopathy Clinic
              </span>
            </a>
            <span className="text-gray-300 py-6 font-medium">
              <p className="mt-4 flex items-center">
                <HiLocationMarker className="h-5 w-5 mr-2 text-gray-300" />
                UGF3, Pratap Plaza, Sector B, LDA Colony,<br />Lucknow, Uttar Pradesh, India
              </p>
              <p className="mt-2 flex items-center">
                <HiPhone className="h-5 w-5 mr-2 text-gray-300" />
                +91 76672 38292
              </p>
              <p className="mt-2 flex items-center">
                <HiMail className="h-5 w-5 mr-2 text-gray-300" />
                priyankamaurya27@gmail.com
              </p>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Login
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    User
                  </a>
                </li>
                <li className='mb-4'>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Staff
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Admin
                  </a>
                </li>
              </ul>
            </div> */}
            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/drpriyankamaurya27/"
                    className="hover:underline "
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/drpriyankamaurya27"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/drpriyankamaurya27/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to={'/about'} className="hover:underline">
                    About US
                  </Link>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="https://vibhamaurya011.github.io/" className="hover:underline">
              Shivam Maurya
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex gap-6 mt-4 sm:justify-center sm:mt-0">
            {/* Social Icons */}
            {/* Facebook icon */}
            <a
              href="https://www.facebook.com/drpriyankamaurya27"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <FaFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>

            {/* Youtube */}
            <a
              href="https://youtube.com/@DrPriyankaMauryaHomeopathy"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <FaYoutube className="w-5 h-5" />
              <span className="sr-only">Youtube page</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/drpriyankamaurya27/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/drpriyankamaurya27/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
