"use client";
import {ComponentPropsWithoutRef, MouseEvent, useEffect, useState, useRef, use} 
from "react";
type User = {
  name: string;
  age: number;
  email: string;
  password: string;
}
type UserWithoutPassword = Omit<User, "password">
type UpdateUser = Partial<User>
type UserPublicData = Pick<User, "name" | "age">
type OptionalUserWithoutPassword = Partial<Omit<User, "password">>
type Status = "idle" | "loading" | "success" | "error" | "pending" | "complete"
type AllowedStatus = Exclude<Status, "idle" | "error">
function Button() {
  const [user, setUser] = useState<User|null>(null)
  const myButton = useRef<HTMLButtonElement>(null);

  function sendData() {
    const user: UserWithoutPassword = {
      name: "Jose",
      age: 25,
      email: "0F0d8@example.com"
    }
    return user
  }
  function updateUser(user: UpdateUser) {
    setUser
  }


  return <button ref={myButton}>Button</button>
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
