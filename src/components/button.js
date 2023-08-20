import Link from 'next/link'
import React from 'react'

export default function Button({ message, link, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl p-5 transition-all ease-in-out duration-300 hover:text-white hover:bg-transparent bg-white text-black font-bold text:xs md:text-md leading-normal border-2 border-white`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}

export function InvertedButton({ message, link, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl p-5 transition-all ease-in-out duration-300 hover:text-primary-700 hover:bg-transparent bg-primary-700 text-white font-bold text:xs md:text-md leading-normal border-2 border-primary-700`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}
