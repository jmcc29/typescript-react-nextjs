"use client";
let someValue: unknown = "Hello string"

let stringaLength = (someValue as string).length

let user: unknown = {
  name: "John",
  age: 30,
}
type User = {
  name: string;
  age: number;
};
const newUser = user as User
//const colors = ["red", "green", "blue"] as const;

let num: number = 123;
let str = num as unknown as string
//No se valida si es un string
// Se puede hacer validaciones de tipos con "Zod"
function Page() {
  //console.log(colors[0])
  
  // const inputElement = document.getElementById('username') as HTMLInputElement;
  // console.log(inputElement.value);
  return (
    <div>
      {/*<input type="text" id="username"/>*/}
    </div>
  );
}
export default Page;
