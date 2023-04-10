import Image from "next/image"
import Link from "next/link";
import Ratebar from "./Ratebar";

export default function MovieCard({ movie }) {
  return (
    <div className="w-full mt-8">
      <Link href={`/movies/${movie.id}`}>
        <Image
          loading="lazy"
          className="w-full object-cover hover:opacity-75 transition ease-in-out duration-150 border-2 border-gray-300 dark:border-gray-700"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          width={250}
          height={500}
        />
      </Link>
      <div className="mt-2">
        <Link href={`/movies/${movie.id}`} className="text-lg mt-2 text-gray-600 dark:text-gray-400 hover:text-gray-300">{movie.title}</Link>
        <div className="flex items-center text-gray-400 text-sm">
          <Ratebar vote={movie.vote_average} />
          <span className="mx-2">{movie.vote_average}</span>
        </div>
      </div>
    </div>
  )
}