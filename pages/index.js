import Head from 'next/head'
import React from 'react'
import MovieCard from '../components/MovieCard'
import FeaturedMovie from '../components/FeaturedMovie'
import axios from 'lib/axios'

export default function Index({ movies, playing }) {
  return (
    <>
      <Head>
        <title>The Movie</title>
      </Head>
      <FeaturedMovie movie={movies.results[0]} />
      <div className="container mx-auto px-4 pt-16">
        <div className="popular-movies">
          <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
        <div className="now-playing-movies py-16">
          <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Now Playing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {playing.results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const movies = await axios.get(`popular`).then(res => res.data)
  const paths = await movies.results.map((movie) => ({
    params: { id: movie.id.toString() },
  }))
  return { paths, fallback: false }
}


export async function getStaticProps() {
  const movies = await axios.get('popular').then(res => res.data)
  const playing = await axios.get('now_playing').then(res => res.data);
  return {
    props: {
      movies,
      playing
    }
  }
}