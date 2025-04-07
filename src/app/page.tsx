"use client"
import React, {JSX, use, useState, Dispatch} from "react"
type ButtonProps = {
  setCount: Dispatch<React.SetStateAction<number>>
  //onClick: (text: string) => void;
  //children: JSX.Element | JSX.Element[] | string;
}
function Button({setCount}: ButtonProps) {
  return <button onClick={() => setCount(10)}
  /*onClick={() => onClick("Hello World")}*/>test</button>
}
//const Button = ({ text }: ButtonProps) => (<button>{text}</button>)
//const Button: React.FC<ButtonProps> = ({ text, subtitle }) => (<button>{text}</button>)

function Page() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button setCount={setCount}/>
    </div>
  )
}
export default Page