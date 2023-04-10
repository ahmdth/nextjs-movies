import Image from "next/image"
import Link from "next/link";
import Ratebar from "./Ratebar";

export default function PersonCard({ person }) {
  return (
    <div className="w-full mt-8">
      <Link href={`/person/${person.id}`}>
        <Image
          loading="lazy"
          className="w-full object-cover hover:opacity-75 transition ease-in-out duration-150 border-2 border-gray-300 dark:border-gray-700"
          src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
          alt={person.title}
          width={250}
          height={500}
        />
      </Link>
      <div className="mt-2">
        <Link href={`/person/${person.id}`} className="text-lg mt-2 text-gray-600 dark:text-gray-400 hover:text-gray-300">{person.name}</Link>
      </div>
    </div>
  )
}