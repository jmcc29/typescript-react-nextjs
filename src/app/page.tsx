"use client"
import React, {JSX} from "react"
type ButtonProps = {
  //onClick: (text: string) => void;
  //children: JSX.Element | JSX.Element[] | string;
}
function Button({}: ButtonProps) {
  return <button /*onClick={() => onClick("Hello World")}*/>test</button>
}
//const Button = ({ text }: ButtonProps) => (<button>{text}</button>)
//const Button: React.FC<ButtonProps> = ({ text, subtitle }) => (<button>{text}</button>)

function Page() {
  return (
    <div>
      <Button/>
    </div>
  )
}
export default Page