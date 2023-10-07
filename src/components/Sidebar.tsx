import {
   HomeIcon,
   BellIcon,
   MagnifyingGlassIcon,
   EllipsisVerticalIcon,
   UserIcon
} from '@heroicons/react/24/outline';
import LinkItem from './LinkItem';

const SideBar = () => {
  return (
    <aside className="fixed top-0 md:left-0 z-40 h-screen transition-transform " >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
         
         <LinkItem Icon={HomeIcon} label="Home" />
         <LinkItem Icon={BellIcon} label="Notifications" />
         <LinkItem Icon={MagnifyingGlassIcon} label="Search" />
         <LinkItem Icon={UserIcon} label="Profile" />
         <LinkItem Icon={EllipsisVerticalIcon} label="More" />
        </ul>
      </div>
    </aside> 
  )
}

export default SideBar