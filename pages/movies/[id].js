import CreditCard from "components/CreditCard";
import MovieCard from "components/MovieCard";
import axios from "lib/axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Movie({ movie, movies, credits }) {
  return (
    <div className="pb-8">
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div className="bg-gradient-to-r from-gray-200 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto grid lg:grid-cols-3 gap-8 py-6 md:p-8 lg:p-12">
          <div className="lg:col-span-1 col-span-2 h-[450px] w-full">
            <Image
              loading="lazy"
              className="h-full w-full object-cover hover:opacity-75 transition ease-in-out duration-150 border-4 bg-gray-400 dark:border-gray-700"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width={150}
              height={300}
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-2xl font-semibold">{movie.title}</h3>
            <p className="mt-4">{movie.overview}</p>
            <div className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-400 mt-8 leading-9 tracking-wide">
              <div>
                <div className="flex">
                  <p className="mr-4">Released</p>
                  <p>{new Date(`${movie.release_date}`).toDateString()}</p>
                </div>
                <div className="flex">
                  <p className="w-24">Budget</p>
                  <p>${movie.budget}</p>
                </div>
                <div className="flex">
                  <p className="w-24">Revenue</p>
                  <p>${movie.revenue}</p>
                </div>
                <div className="flex">
                  <p className="w-24">Production</p>
                  <div>{movie.production_companies.map((company, index) =>
                    <Link href={`compaines/${company.id}`} className="px-2 py-1 mx-1 rounded bg-gray-300 dark:bg-gray-700 text-sm" key={index}>{company.name}</Link>)
                  }</div>
                </div>
                <div className="flex">
                  <p className="w-24">Countries</p>
                  <div>{movie.production_countries.map((country, index) =>
                    <span className="px-2 py-1 mx-1 rounded bg-gray-300 dark:bg-gray-700 text-sm" key={index}>{country.name}</span>)
                  }</div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <p className="w-24">Runtime</p>
                  <p>{`${(movie.runtime / 60).toFixed(0)}h ${movie.runtime % 60}min `}</p>
                </div>
                <div className="flex">
                  <p className="w-24">Status</p>
                  <p>{movie.status}</p>
                </div>
                <div className="flex">
                  <p className="w-24">Genres</p>
                  <div className="break-all">{movie.genres.map((genre, index) =>
                    <Link href={`geners/${genre.id}`} className="px-2 py-1 mx-1 rounded bg-gray-300 dark:bg-gray-700 text-sm" key={index}>{genre.name}</Link>)
                  }</div>
                </div>
                <div className="flex">
                  <p className="w-24">Langauges</p>
                  <p>{movie.spoken_languages[0].name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-16">
        <div className="popular-movies">
          <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Movie Cast</h2>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {credits.cast.map(credit => (credit.profile_path && <SwiperSlide key={credit.id}><CreditCard credit={credit} /></SwiperSlide>))}
          </Swiper>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-16">
        <div className="popular-movies">
          <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">More Like This</h2>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {movies.results.map(movie => <SwiperSlide key={movie.id}><MovieCard movie={movie} /></SwiperSlide>)}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const movies = await axios.get(`popular`).then(res => res.data)
  const credits = await axios.get(`${params.id}/credits`).then(res => res.data);
  const creditPaths = await credits.results.map((credit) => ({
    params: { id: credit.id.toString() },
  }))
  const moviesPaths = await movies.results.map((movie) => ({
    params: { id: movie.id.toString() },
  }))
  const paths = { ...moviesPaths, ...creditPaths };
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const movie = await axios.get(`${params.id}`).then(res => res.data);
  const movies = await axios.get(`${params.id}/similar`).then(res => res.data);
  const credits = await axios.get(`${params.id}/credits`).then(res => res.data);
  return {
    props: {
      movie,
      movies,
      credits
    }
  }
}