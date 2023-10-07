import {useState} from 'react'


interface TextAreaProps{
  placeholder:string,
  rows:number,
  onInput: (value: string) => void // add a callback prop to handle input change
}

const TextArea = ({placeholder, rows, onInput}:TextAreaProps) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value) // update the state variable
    onInput(e.target.value) // call the callback prop with the input value
  }

  return (
    <textarea 
      className="w-full outline-0 focus:border-b p-4" 
      rows={rows}
      placeholder={placeholder} 
      value={inputValue}
      onChange={handleChange} />    
  )
}

export default TextArea;