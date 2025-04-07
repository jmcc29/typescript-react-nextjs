"use client";
import {ComponentPropsWithoutRef} from "react";
type ButtonProps = ComponentPropsWithoutRef<"button">
function Button({}: ButtonProps) {
  return <button>{}</button>;
}
function Page() {
  return (
    <div>
      <Button style={{}} />
    </div>
  );
}
export default Page;
