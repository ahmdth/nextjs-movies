import Image from "next/image"
import Ratebar from "./Ratebar"

export default function FeaturedMovie({ movie }) {
  return (
    <div className='relative bg-gray-100 dark:bg-gray-800'>
      <Image
        loading="lazy"
        className="h-[500px] w-full object-cover hover:opacity-75 transition ease-in-out duration-150 border-2 dark:border-gray-700"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
        width={400}
        height={225}
      />
      <div className='absolute md:top-0 bottom-0 right-0 p-4 md:p-10 lg:px-24 h-2/3 md:w-2/3 md:h-full inset-x-0 md:left-0 flex flex-col justify-center bg-gradient-to-t md:bg-gradient-to-r from-gray-200 via-gray-100 dark:from-gray-900 dark:via-gray-800 to-transparent'>
        <div className="container mx-auto">
          <h1 className='mt-2 font-bold text-4xl lg:text-5xl'>{movie.title}</h1>
          <div className='flex flex-row items-center gap-3 mt-4'>
            <Ratebar vote={movie.vote_average} />
            <div className='opacity-50 hidden md:block'>{movie.vote_average}</div>
            <div className='opacity-50 hidden md:block'>{movie.vote_count} Reviews</div>
            <div className='opacity-50'>{new Date(`${movie.release_date}`).toDateString()}</div>
          </div>
          <p className='mt-2 opacity-80 leading-7 tracking-wide line-clamp-3 md:line-clamp-5 text-sm md:text-base'>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}