import Image from "next/image";
import { useEffect } from "react";

export default function Ratebar({ vote }) {
  useEffect(() => {
    document.getElementById('rate-bar').style.clipPath = `inset(0px ${100 - vote * 10}% 0px 0px)`;
  }, [])
  return (
    <div className='relative aspect-[11/2] hue-rotate-[320deg] w-20'>
      <Image
        loading="lazy"
        src="/stars.webp"
        className=''
        alt="Ratebar"
        width={100}
        height={30}
      />
      <Image
        id="rate-bar"
        src="/stars-filled.webp"
        className='absolute inset-0'
        alt="Ratebar"
        width={100}
        height={30}
      />
    </div>
  )
}