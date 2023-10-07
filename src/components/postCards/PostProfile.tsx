interface PostProfileProps{
  Image:string,
  Name:string
  DisplayName:string
}

const PostProfile = ({Image, Name, DisplayName}: PostProfileProps) => {
  return (
    <div className="flex mb-2">      
        <img className="w-10 h-10 rounded-full" src={Image} alt="Neil image" />
      
      <div className="flex-1 mx-2">
          <a href="#" className="text-sm font-medium text-gray-900 truncate dark:text-white">{Name} . <span className="text-sm text-gray-500 truncate dark:text-gray-400"> {DisplayName}</span> </a>
          <small className="block text-sm text-gray-500 truncate dark:text-gray-400">12 days ago</small>
      </div>
    </div>
  )
}
export default PostProfile