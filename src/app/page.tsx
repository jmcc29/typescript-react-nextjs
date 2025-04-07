"use client";
import {ComponentPropsWithoutRef, MouseEvent, useEffect, useState, useRef, use} from "react";
type User = {
  name: string;
  age: number;
}
function Button() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Click me");
  const [active, setActive] = useState(false);
  
  const [user,setUser] = useState<User|null>(null)
  const myButton = useRef<HTMLButtonElement>(null);  

  console.log(user?.name)
  console.log(user?.age)

  myButton.current.
  return <button ref={myButton}>Button</button>;
}
function Page() {
  return (
    <div>
      <Button>
        asdf
      </Button>
    </div>
  );
}
export default Page;
