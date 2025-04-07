"use client";
import {ComponentPropsWithoutRef} from "react";
type ButtonProps = ComponentPropsWithoutRef<"button">
function Button({onClick, ...rest}: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      alert('Button clicked!')
    }
  };
  return <button onClick={handleClick} {...rest}>Button</button>;
}
function Page() {
  return (
    <div>
      <Button 
        onClick={() => alert("Hello World!")}
        style={{
          color: "white",
          backgroundColor: "blue",
        }}
        >
        Click me
      </Button>
    </div>
  );
}
export default Page;
