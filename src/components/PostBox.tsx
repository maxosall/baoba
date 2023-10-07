import {
   PhotoIcon,
   PaperClipIcon,
   CameraIcon,
   GifIcon,
   MapPinIcon
} from '@heroicons/react/24/outline';
import {useState} from 'react'
import TextArea from './TextArea';

const PostBox =() => {
  // const [inputValue, setInputValue] = useState('')
  const [textValue, setTextValue] = useState('') // add a state variable to store the text value
  const handleInput = (value: string) => {
    setTextValue(value) // update the state variable when the input changes
  }
  
  return (
    <>
      <TextArea placeholder="what's on your mind?" onInput={handleInput}  />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span><PhotoIcon className="icon-style " /></span>
          <span><PaperClipIcon className="icon-style" /></span>
          <span><CameraIcon className="icon-style"/></span>
          <span><GifIcon className="icon-style" /></span>
          <span><MapPinIcon className="icon-style" /></span>
        </div>  
        <button disabled={!textValue} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Post</button>
      </div>
    </>
  )
}
export default PostBox