import { supabase } from '@/util/supabase'
import Link from 'next/link';

export default function Home({ lessons }) {
  console.log({ lessons });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 font-mono bg-white text-black`}
    >
      <div className='flex flex-col items-center justify-between'>
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/${lesson.id}`}>
            <p className="text-center p-8 h-40 mb-4 rounded shadow hover:shadow-lg text-xl flex bg-white">{lesson.title}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from('lesson').select('*')

  return {
    props: {
      lessons,
    },
  }
}