import Image from "next/image"

export default function FeaturedPerson({ person }) {
  return (
    <div className='relative bg-gray-100 dark:bg-gray-800'>
      <Image
        loading="lazy"
        className="h-[500px] w-full object-cover hover:opacity-75 transition ease-in-out duration-150 border-2 dark:border-gray-700"
        src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
        alt={person.name}
        width={400}
        height={225}
      />
      <div className='absolute md:top-0 bottom-0 right-0 p-4 md:p-10 lg:px-24 h-2/3 md:w-2/3 md:h-full inset-x-0 md:left-0 flex flex-col justify-center bg-gradient-to-t md:bg-gradient-to-r from-gray-200 via-gray-100 dark:from-gray-900 dark:via-gray-800 to-transparent'>
        <div className="container mx-auto">
          <h1 className='mt-2 font-bold text-4xl lg:text-5xl'>{person.name}</h1>
          <div className='flex flex-row items-center gap-3 mt-4'>
            <div className='opacity-50 hidden md:block'>{person.known_for_department}</div>
            <div className='opacity-50 hidden md:block'>{person.place_of_birth} Place of birth</div>
            {person.birthday && <div className='opacity-50'> Birth Day {new Date(`${person.birthday}`).toDateString()}</div>}
            {person.deathday && <div className='opacity-50'>Death Day {new Date(`${person.deathday}`).toDateString()}</div>}
          </div>
          <p className='mt-2 opacity-80 leading-7 tracking-wide line-clamp-3 md:line-clamp-5 text-sm md:text-base'>{person.biography}</p>
        </div>
      </div>
    </div>
  )
}