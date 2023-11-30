/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'

import {
  IconReact,
  IconTailw,
  IconSeq,
  IconType,
  IconRedux,
  IconNext,
  IconNode,
  IconJ
} from '@/components/icons/icons'
import { Button } from '@/components/ui/button'
import Proyects from '@/components/proyects'

const tech = {
  react: <IconReact />,
  tailwind: <IconTailw />,
  redux: <IconRedux />,
  next: <IconNext />,
  node: <IconNode />,
  type: <IconType />,
  seq: <IconSeq />,
  java: <IconJ />
}

export default function Home() {
  return (
    <main>
      <section className='md:my-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center mt-20'>
        <div className='md:flex-1 md:mr-20 mt-5 lg:mt-0'>
          <p className=' font-mada text-lg lg:text-2xl text-purple-700 dark:text-purple-500'>
            Hello there! 👋 I am
          </p>
          <h1 className='font-primary text-3xl lg:text-5xl font-bold mb-7'>
            Alejandro Díaz
          </h1>
          <p className='text-lg font-Hind lg:text-lg mb-7'>
            I am a dedicated and experienced full-stack developer with a focus
            on front-end development. I have a strong track record of creating
            visually appealing and highly functional websites that exceed user
            expectations. My expertise in technologies such as JavaScript,
            Typescript, React, and Next.js has enabled me to develop dynamic and
            responsive websites that deliver exceptional user experiences.
          </p>

          <div className='flex lg:flex-row flex-col lg:mt-2 gap-5 text-center items-center '>
            <div className='flex gap-2 '>
              <Button asChild variant='personal' size='lg'>
                <a
                  href='https://github.com/aledx18'
                  target='_blank'
                  rel='noreferrer'>
                  <Github className='mr-2 dark:text-white' size={32} />

                  <p className='dark:text-white text-black text-lg'>GitHub</p>
                </a>
              </Button>

              <Button asChild variant='personal' size='lg'>
                <a
                  href='https://www.linkedin.com/in/alejandrodíaz-dev'
                  target='_blank'
                  rel='noreferrer'>
                  <Linkedin
                    className='mr-2 dark:text-white text-primary'
                    size={32}
                    strokeWidth={1.4}
                  />

                  <p className='dark:text-white text-black text-lg'>Linkedin</p>
                </a>
              </Button>
            </div>

            <div className='relative group max-w-7xl'>
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
              <div className='relative pr-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start'>
                <svg
                  className='m-1 text-purple-600'
                  fill='none'
                  width='36'
                  height='40'
                  viewBox='0 0 24 24'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z'
                  />
                </svg>
                <p className='text-slate-800'>Download CV</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-around md:block mt-8 md:mt-0 md:flex-1'>
          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='89'
              height='113'
              fill='none'
              viewBox='0 0 89 113'
              className='lg:block hidden absolute -top-16 -left-16 w-auto h-auto dark:fill-white fill-black'>
              <path
                fillRule='evenodd'
                d='M84.62 31.602c-.345-4.215-.65-8.388-1.117-12.592a1.64 1.64 0 10-3.259.357c.462 4.18.765 8.318 1.106 12.504.077.905.87 1.576 1.765 1.503a1.644 1.644 0 001.505-1.772zM55.839 51.484c-9.567-9.333-19.6-18.177-29.359-27.3a1.642 1.642 0 00-2.242 2.402C33.983 35.69 44 44.514 53.545 53.832a1.642 1.642 0 002.294-2.348zM36.82 95.755c-11.114-2.035-22.302-3.762-33.392-5.922a1.643 1.643 0 00-.626 3.224c11.105 2.158 22.305 3.89 33.433 5.923a1.639 1.639 0 10.585-3.225z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <Image
            alt='codigoPort'
            src='/definit.svg'
            width='500'
            height='600'
            className='w-auto h-auto'
          />

          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='55'
              height='58'
              fill='none'
              viewBox='0 0 55 58'
              className='lg:block hidden absolute -bottom-14 -right-12 w-auto h-auto dark:fill-white fill-black'>
              <path
                fillRule='evenodd'
                d='M38 7.613c4.379 1.86 9.052 3.122 13.59 4.312.979.253 1.991-.307 2.189-1.258.268-.943-.326-1.915-1.233-2.159-4.4-1.15-8.935-2.358-13.106-4.142-.889-.384-1.955.027-2.361.922-.407.894.033 1.94.922 2.325zM21.873 23.677c6.342 8.342 13.732 15.855 19.905 24.377.546.792 1.677.98 2.474.412.797-.568 1.014-1.67.398-2.472-6.171-8.543-13.558-16.078-19.897-24.442a1.862 1.862 0 00-2.553-.357c-.728.595-.946 1.697-.327 2.482zM4.432 50.256l1.03-12.755c.127-.968-.627-1.827-1.627-1.911-1-.083-1.818.647-1.946 1.615L.857 49.98c-.056.977.698 1.83 1.7 1.909.93.069 1.819-.657 1.875-1.633z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
      </section>
      <section>
        <div className='flex gap-10 items-center md:my-0 justify-center md:flex-row flex-col my-20'>
          <h2 className=' text-xl'>Tech Stack |</h2>
          <div className='flex gap-4 md:gap-6'>
            {tech.java}
            {tech.react} {tech.type} {tech.node} {tech.next} {tech.tailwind}
          </div>
        </div>
      </section>
      <Proyects />
    </main>
  )
}
