import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'

export default function DisciplineCard({ discipline }) {
  const { t } = useTranslate()
  return (
    <div className='group text-black cursor-pointer shadow-lg rounded-xl'>
      <div className='group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300 py-5 lg:py-10 px-6'>
        <Link href={discipline.link}>
          <div className='bg-white flex flex-row md:flex-col gap-2 items-center justify-between md:items-start'>
            <div className='flex flex-row lg:flex-col gap-2 items-center md:items-start'>
              <Image
                loading='lazy'
                width={32}
                height={32}
                sizes='100vw'
                alt='Discipline illustration'
                src={discipline.defaultIcon}
              />
              <div className='text-black font-bold text-base md:text-xl xl:text-2xl'>
                {t(discipline.title)}
              </div>
            </div>
            <div className='flex md:hidden'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                sizes='100vw'
                alt='Discipline link illustration'
                src={'/icons/next.svg'}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export function DisciplineListCard({ discipline }) {
  const { t } = useTranslate()
  return (
    <div className='group text-black cursor-pointer shadow-lg rounded-xl'>
      <div className='group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300 py-5 px-6'>
        <Link href={discipline.link}>
          <div className='bg-white flex flex-row gap-2 items-center justify-between'>
            <div className='flex flex-row gap-2 items-center'>
              <Image
                loading='lazy'
                width={32}
                height={32}
                sizes='100vw'
                alt='Discipline illustration'
                src={discipline.defaultIcon}
              />
              <div className='text-black font-bold text-base md:text-xl xl:text-2xl'>
                {t(discipline.title)}
              </div>
            </div>
            <div className='flex'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                sizes='100vw'
                alt='Discipline link illustration'
                src={'/icons/next.svg'}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export function DisciplineListSpecialistDetail({ discipline }) {
  const { t } = useTranslate()
  return (
    <div className='group text-black cursor-pointer'>
      <Link href={discipline.link}>
        <div className='bg-white flex flex-row gap-2 items-center justify-between group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300  shadow-lg rounded-xl pl-4 pr-20 py-5'>
          <div className='flex flex-row gap-2 items-center'>
            <Image
              loading='lazy'
              width={32}
              height={32}
              sizes='100vw'
              alt='Discipline illustration'
              src={discipline.defaultIcon}
            />
            <div className='text-black font-bold text-base'>{t(discipline.title)}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
