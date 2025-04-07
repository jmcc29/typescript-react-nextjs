"use client";
import {ComponentPropsWithoutRef} from "react";
// type Props = ComponentPropsWithoutRef<"button"> 
// type ButtonProps = Props & {
//   dark?: boolean;
//   variant?: "primary" | "secondary";
// }
interface Props extends ComponentPropsWithoutRef<"button"> {
  dark?: boolean;
  variant?: "primary" | "secondary";
}
interface ButtonProps extends Props {}
function Button({dark, variant, children}: ButtonProps) {
  return <button>Button</button>;
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
