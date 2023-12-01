import { ExternalLink, Github } from 'lucide-react'
import { proyectos } from '@/components/const/const'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Proyects() {
  return (
    <section className='mb-20'>
      <div className='mt-16 lg:mt-24'>
        <div className='flex items-center text-center gap-2 justify-center md:justify-normal'>
          <h1 className='font-bold text-2xl lg:text-3xl p-0 my-6 '>
            Projects 🚀
          </h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {proyectos.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>
                {item.title} {item.icon}{' '}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href={item.src} target='_blank' rel='noreferrer'>
                <img
                  alt='Home'
                  src={item.srcImage}
                  className='h-72 w-full rounded-md object-cover transition-all duration-500 hover:scale-105'
                />
              </a>
            </CardContent>
            <CardFooter>
              <div className='flex gap-4'>
                <Button asChild variant='personal'>
                  <a href={item.src} target='_blank' rel='noreferrer'>
                    <ExternalLink className='mr-2 h-5 w-5 dark:text-white' />

                    <p className='dark:text-gray-300 text-black'>WebPage</p>
                  </a>
                </Button>
                <Button asChild variant='personal'>
                  <a href={item.github} target='_blank' rel='noreferrer'>
                    <Github className='mr-2 h-5 w-5 dark:text-white' />

                    <p className='dark:text-gray-300 text-black'>Github</p>

                    <p className='pl-1'>{item.githubSlug} </p>
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
