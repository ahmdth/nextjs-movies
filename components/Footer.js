import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container mx-auto lg:p-6 p-4 border-t text-sm md:text-base border-gray-200 dark:border-gray-700 dark:bg-gray-800 flex items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Image src="/movies-sm.webp" width="25" height="25" alt="Logo" />
          <div>Next.js Movies</div>
        </div>
        <div className="flex flex-row gap-2 items-center my-2">
          <span>Data provided by</span>
          <Image src="/tmdb.svg" width="50" height="20" alt="TMDB Logo" />
        </div>
    </footer >
  )
}