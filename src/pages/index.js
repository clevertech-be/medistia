import React from 'react'
import Layout from '../components/layout'
import Button, { InvertedButton } from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import DisciplineCard from '../components/cards/discipline'
import InfoBox from '../components/cards/infoBox'
import Newsletter from '../components/cards/newsletter'
import { allDisciplines } from '../api/disciplines'
import ArticleCard from '../components/cards/article'
import { allArticles } from '../api/articles'
import Image from 'next/image'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='mb-10 text-black w-full flex flex-col gap-4 items-start justify-between'>
        <div className='w-full'>
          <Image
            className='w-full'
            width={500}
            height={540}
            sizes='100vw'
            alt='Project hero illustration'
            src={'/images/hero.png'}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-3xl xl:text-4xl font-bold'>About us</div>
          <div className='text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam in
            consectetur aliquam, lacus velit luctus massa, vitae ullamcorper nisl nunc quis sapien.
            Sed euismod, diam in consectetur aliquam, lacus velit luctus massa, vitae ullamcorper
            nisl nunc quis sapien.
          </div>
          <div className='flex flex-col w-full md:w-auto md:flex-row gap-4 justify-between md:justify-start'>
            <InvertedButton message={t('home.about.button.primary')} link='/about' />
            <Button message={t('home.about.button.secondary')} link='/centers' />
          </div>
        </div>
      </div>

      <div className='my-10 text-black w-full flex flex-col xl:flex-row gap-4 items-start justify-between'>
        <div className='flex flex-col gap-3 flex-wrap items-start'>
          <div className='text-2xl sm:text-3xl font-bold leading-tight'>
            {t('newsletter.title')}
          </div>
          <div className='text-base font-normal leading-normal'>{t('newsletter.description')}</div>
        </div>
        <InvertedButton message={t('newsletter.button')} link='/newsletter' />
      </div>

      <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
        {allDisciplines.slice(0, 8).map((discipline) => (
          <DisciplineCard
            key={discipline.name}
            title={t(discipline.title)}
            link={discipline.link}
            image={discipline.defaultIcon}
          />
        ))}
      </div>

      <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
        <Button message={t('appointment.button')} link={'/'} />
      </InfoBox>

      <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4 w-full my-10'>
        <div className='flex flex-col items-start gap-4'>
          <div className='text-2xl font-bold'>{t('home.usp.1.title')}</div>
          <div className='text-base'>{t('home.usp.1.description')} </div>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <div className='text-2xl font-bold'>{t('home.usp.2.title')}</div>
          <div className='text-base'>{t('home.usp.2.description')} </div>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <div className='text-2xl font-bold'>{t('home.usp.3.title')}</div>
          <div className='text-base'>{t('home.usp.3.description')} </div>
        </div>
      </div>

      <div className='py-24 text-black w-full flex flex-col gap-4 items-center justify-between bg-primary-50'>
        <div className='flex flex-col md:flex-row gap-3 justify-between items-start md:items-center w-full'>
          <div className='text-2xl sm:text-3xl font-bold leading-tight'>{t('home.news.title')}</div>
          <InvertedButton message={t('home.news.button')} link='/news' />
        </div>
        <div className='w-full grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {allArticles.slice(0, 3).map((article) => (
            <ArticleCard
              key={article.name}
              title={t(article.title)}
              topic={t(article.topic)}
              link={article.link}
              date={article.date}
              image={article.defaultImage}
            />
          ))}
        </div>
        <Newsletter />
      </div>

      <div className='py-24 text-black w-full flex flex-col lg:flex-row gap-10 justify-between items-center'>
        <div className='flex flex-col gap-4'>
          <div className='text-3xl xl:text-4xl font-bold'>About us</div>
          <div className='text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam in
            consectetur aliquam, lacus velit luctus massa, vitae ullamcorper nisl nunc quis sapien.
            Sed euismod, diam in consectetur aliquam, lacus velit luctus massa, vitae ullamcorper
            nisl nunc quis sapien.
          </div>
          <div className='flex flex-col w-full md:w-auto md:flex-row gap-4 justify-between md:justify-start'>
            <InvertedButton message={t('home.about.button.primary')} link='/about' />
            <Button message={t('home.about.button.secondary')} link='/centers' />
          </div>
        </div>
        <div className='rounded-xl h-[240px] md:h-[420px] lg:h-[340px] w-full relative'>
          <Image
            loading='lazy'
            className='rounded-xl'
            fill
            alt='Article illustration'
            src={'/images/about.png'}
          />
        </div>
      </div>
      <Newsletter />
    </Layout>
  )
}
