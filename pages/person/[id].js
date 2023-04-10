import axios from 'lib/axios'
import React from 'react'

export default function Person({ person }) {
  return (
    <div>Person</div>
  )
}


export async function getStaticPaths() {
  // const person = await axios.get(`person`).then(res => res.data)
  // const paths = {
  //   params: { id: person.id.toString() },
  // }
  // const router = useRouter()
  // const { id } = router.params
  return {
    paths: [{ params: { id: document.location.href.split('/').at(-1) } }],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const person = await axios.get(`person/${params.id}`).then(res => res.data);
  const movies = await axios.get(`${params.id}/similar`).then(res => res.data);
  return {
    props: {
      person,
      movies,
    }
  }
}