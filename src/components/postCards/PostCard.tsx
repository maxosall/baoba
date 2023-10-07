import PostFooter from '../postCards/PostFooter'
import PostProfile from '../postCards/PostProfile'
import TextArea from '../TextArea'

interface PostCardProps{
  Text: string,
}
const PostCard =({Text}: PostCardProps) => {
  return (
    <div className="max-w-xlg rounded-lg shadow border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4">
        <PostProfile Image="https://unsplash.it/20/20" Name="habib sall" DisplayName="@sall_habib"/>
        <p className=" font-normal text-gray-500 dark:text-gray-400">{Text}</p>
      </div>
      
      <PostFooter Likes={43} Comments ={560} />

      <div className="comment-section border-t"> 
        <form>
          <label htmlFor="chat" className="sr-only">Your comment</label>
          <div className="flex items-center px-2  rounded-lg bg-gray-50 dark:bg-gray-700">
              <TextArea id="chat" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."/>
              <button type="submit" className="outline-0 inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostCard