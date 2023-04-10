import Image from "next/image"
import Link from "next/link";

export default function CreditCard({ credit }) {
  return (
    <div className="w-full mt-8">
      <Link href={`/person/${credit.id}`}>
        <Image
          loading="lazy"
          className="w-full object-cover hover:opacity-75 transition ease-in-out duration-150 border-2 border-gray-200 dark:border-gray-700"
          src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
          alt={credit.name}
          width={250}
          height={400}
        />
      </Link>
      <div className="mt-2">
        <Link href={`/person/${credit.id}`} className="text-lg mt-2 hover:text-gray-100">{credit.name}</Link>
        <p className="text-gray-400">{credit.character}</p>
      </div>
    </div>
  )
}