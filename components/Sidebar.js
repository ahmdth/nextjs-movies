import { FilmIcon, HomeIcon, MagnifyingGlassIcon, TvIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import ThemeDropdown from "./ThemeDropdown";

export default function Sidebar() {
  return (
    <div className="z-50 lg:min-h-screen fixed bottom-0 lg:w-16 inset-x-0 flex flex-row lg:flex-col justify-between items-center py-5 lg:px-5 border-t lg:border-r lg:border-t-0 bg-gray-200 dark:bg-gray-900 border-gray-300 dark:border-gray-700 lg:order-first" style={{position: "fixed !important"}}>
      <Link href="/" className="hidden lg:block">
        <Image
          src="/movies.png"
          height={50}
          width={50}
          alt="Movies Logo"
        />
      </Link>
      <div className="flex-1 flex flex-row lg:flex-col justify-evenly text-gray-500">
        <Link href="/" title="Home">
          <HomeIcon className="w-6 h-6 " />
        </Link>
        <Link href="/movies" title="Movies">
          <FilmIcon className="w-6 h-6 " />
        </Link>
        <Link href="/tv" title="Tv">
          <TvIcon className="w-6 h-6 " />
        </Link>
        <button href="/" title="Home">
          <MagnifyingGlassIcon className="w-6 h-6 " />
        </button>
      </div>
      {/* Theme dropdown */}
      <ThemeDropdown className="hidden lg:block"/>
    </div>
  )
}