import { Inter } from 'next/font/google'
import SideBar from '@/./components/SideBar'
import TimeLine from '@/./components/TimeLine'
import RightColumn from '@/./components/RightColumn'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container">
      <main className="min-h-screen grid grid-cols-12 md:grid-cols-12 gap-4">
        <section className="col-span-2 md:col-span-3 border-r border-gray-200">      
        <SideBar />
        </section>
        {/* <hr className="" /> */}
        <section className="col-span-10 md:col-span-9">
          <div className="container mx-auto">
            <div className="md:grid md:grid-cols-3 py-4">
              <TimeLine/>
              <RightColumn />
            </div>              
          </div>            
        </section>
      </main>
    </div>
  )
}
