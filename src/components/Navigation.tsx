import {
  HomeIcon, 
  BellIcon, 
  MagnifyingGlassIcon,  
  EllipsisVerticalIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 md:top-0 md:left-0 z-50 w-full md:w-auto h-12 bg-white 
      flex md:flex-col justify-between items-center border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="w-full px-4 flex flex-row md:flex-col justify-between items-center">
        <a className="flex flex-col md:flex-row justify-center items-center md:py-4" href="">
          <HomeIcon className="h-6 w-6 md:mr-4 text-gray-700" /> <span className="hidden md:inline">Home</span></a>

        <a className="flex flex-col md:flex-row justify-center items-center md:py-4" href="">
          <BellIcon className="h-6 w-6 md:mr-4 text-gray-700" /> <span className="hidden md:inline">Notes</span></a>

        <a className="flex flex-col md:flex-row justify-center items-center md:py-4" href="">
          <UserIcon className="h-6 w-6 md:mr-4 text-gray-500" /> <span className="hidden md:inline">Profile</span></a>
        
        <a className="flex flex-col md:flex-row justify-center items-center md:py-4" href="">
          <MagnifyingGlassIcon className="h-6 w-6 md:mr-4 text-gray-700" /> <span className="hidden md:inline">Search</span></a>
        
        <a className="flex flex-col md:flex-row justify-center items-center md:py-4" href="">
          <EllipsisVerticalIcon className="h-6 w-6 md:mr-4 text-gray-500" /> <span className="hidden md:inline">More</span></a>
      </div>
    </nav>
  )
}
export default Navigation