"use client";
type Color = "red" | "blue" | "green";
// type ButtonProps = {
//   title?: string;
//   color?: Color;
// };
interface ButtonProps {
  title?: string;
  color?: Color;
}
function Button({ title="test", color}: ButtonProps) {
  return <button>{title}</button>;
}
function Page() {
  return (
    <div>
      <Button />
    </div>
  );
}
export default Page;
