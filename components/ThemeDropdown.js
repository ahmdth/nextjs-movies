import { Menu, Transition } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react'

export default function ThemeDropdown({ className }) {
  const toggle = (theme, theme2) => {
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(theme2);
    localStorage.setItem("theme", theme2)
  }
  const ThemeHandler = (key) => {
    switch (key) {
      case "light":
        toggle('dark', 'light')
        break;
      case "dark":
        toggle('light', 'dark')
        break;
      default:
        window.matchMedia('(prefers-color-scheme: dark)').matches ? toggle('light', 'dark') : toggle('dark', 'light');
        break;
    }
  }
  return (
    <Menu as="div" className={`${className} relative text-gray-500 `}>
      <div>
        <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2  dark:focus:ring-gray-800">
          <span className="sr-only">Open user menu</span>
          <SunIcon className="w-5 h-5 dark:hidden block" />
          <MoonIcon className="w-5 h-5 hidden dark:block" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-4 bottom-6 p-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <button
              onClick={e => ThemeHandler("light")}
              className='block w-full text-left p-2 text-sm dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700'
            >
              Light
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              onClick={e => ThemeHandler("dark")}
              className='block w-full text-left p-2 text-sm dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700'
            >
              Dark
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              onClick={e => ThemeHandler()}
              className='block w-full text-left p-2 text-sm dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700'
            >
              System
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>)
}
