import React, {SVGProps} from 'react'

interface LinkItemProps{
  label: String
  Icon : (props:SVGProps<SVGSVGElement>) => JSX.Element
}

const LinkItem  = ({label, Icon}: LinkItemProps) => {
  return (
    <li>
      <a href="#" className="flex items-center p-2 text-gray-900 hover:rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <Icon className="w-6 h-6 text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
         <span className="ml-3 hidden md:block">{label}</span>
        </a>
    </li>
  )
}

export default LinkItem