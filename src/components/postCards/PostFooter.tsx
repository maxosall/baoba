import {
   ShareIcon,
   HeartIcon,
   ChatBubbleBottomCenterTextIcon,
   BookmarkIcon,
   UserIcon
} from '@heroicons/react/24/outline';

interface PostFooterProps{
  Likes:number,
  Comments:number,  
}
const PostFooter =({Likes, Comments}: PostFooterProps)=> {
  return(
    <div className="flex justify-evenly p-3 border-t">
      <span className="flex"><HeartIcon className="icon-style" /> <small className="mx-2">{Likes}</small></span>
      <span className="flex"><ChatBubbleBottomCenterTextIcon className="icon-style" /><small className="mx-2">{Comments}</small></span>
      <span className="flex"><ShareIcon className="icon-style" /><small className="mx-2">Share</small> </span>
      <span className="flex"><BookmarkIcon className="icon-style" /><small className="mx-2">Save</small> </span>
    </div>
  )
}
export default PostFooter;