"use client";
import {ComponentPropsWithoutRef, MouseEvent} from "react";
type ButtonProps = ComponentPropsWithoutRef<"button"> & {}
function Button({}: ButtonProps) {
  //const handleClick=(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {}
  function handleClick(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {}
  return <button onClick= {handleClick}>Button</button>;
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
