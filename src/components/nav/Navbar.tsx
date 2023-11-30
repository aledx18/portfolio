import Link from 'next/link'
import Toggler from './Toggler'

export default function Navbar() {
  return (
    <>
      <div className='rounded-xl shadow-lg fixed lg:mt-2 p-4 lg:mx-56 mt-1 z-10 top-0 left-0 right-0 backdrop-blur-sm dark:bg-[#111112]/30'>
        <div className='flex justify-between items-center text-center'>
          <Link className='lg:text-md p-2' href='/'>
            <svg
              width='30'
              height='30'
              fill='none'
              stroke='#a855f7'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M8 9l3 3-3 3' />
              <path d='M13 15L16 15' />
              <rect width='18' height='16' x='3' y='4' rx='2' />
            </svg>
          </Link>
          <div className='flex items-center justify-around'>
            <a className='lg:text-md p-2 text-sm font-mada dark:text-purple-500 text-purple-700'>
              Projects
            </a>

            <div className='px-2'>
              <Toggler />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// #1b1b1f
// #161618
