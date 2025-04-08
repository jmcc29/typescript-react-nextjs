// function identity<T>(value: T){
//   return value;
// }
function getFirstElement<T>(array: T[]): T{
  return array[0];
}
getFirstElement([1, 2, 3]);
getFirstElement(['a', 'b', 'c']);
getFirstElement([true, false, true]);

interface Box<T> {
  content: T
}
const box1: Box<string> = {
  content: 'hello'
}
const box2: Box<number> = {
  content: 123
}
const box3: Box<boolean> = {
  content: true
}

type ApiResponse<T> = {
  status: number;
  data: T;
}
const response1: ApiResponse<{name: string, age: number}> = {
  status: 200,
  data: {
    name: 'John Doe',
    age: 30
  }
}
const response2: ApiResponse<string[]> = {
  status: 200,
  data: ['a', 'b', 'c']
}
function Page() {
  // identity<string>('Hello world');
  // identity<number>(123);
  // identity<boolean>(true);
  return (
    <div>
      {/*<input type="text" id="username"/>*/}
    </div>
  );
}
export default Page;
