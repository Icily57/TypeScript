const generics = () => {
  /*Intro: Generics is a way to create reusable components. 
It allows us to write a function or a class that can work with any data type.
This allows users to consume these components and use their own types.*/

  // what is our Main issue? 
  //CASE 1: we want to create a function that will convert a value to an array

  //  function convertToArray(input:number): number[] {
  //   return [input];
  //  }

  //  console.log(convertToArray(10)); // [10]

  // CASE 2:  let's say we want to convert a string to an array of strings
  // function convertToArray2(input:string): string[] {
  //     return [input];
  //    }
  //    console.log(convertToArray2(10)); // [10]

  //CASE 3:what if we want to convert an object to an array of objects
  // function convertToArray3(input: object): object[] {
  //   return [input];
  // }

  // Generics to the rescue: 1 function to solve CASE 1, CASE 2, CASE 3
  //Benefits of Generics:
  // 1. Reusable components
  // 2. Type safety
  // 3. Eliminate code duplication

  //Generics functions
  // hello world of generics

  function convertToArray<T>(input: T): T[] {
    return [input];
  }

  // console.log(convertToArray(10)); // [10]
  // console.log(convertToArray("kevin")); // ['kevin']
  // console.log(convertToArray({ name: "kevin", age: 25 })); // [{name: 'kevin', age: 25}]

  //example 3: return an array of two elements of the same type

  // const getInputs = <T, K>(input1: T, input2: K): [T, K] => {
  //   return [input1, input2];
  // }

  // console.log(getInputs(2, "two"))

  // function which is going to receive an array ,array item => return the index of array item

  const getIndexOfArrayItem = <T>(array: T[], item: T) => {
    return array.findIndex((itemInsideArray) => itemInsideArray === item)
  }

  console.log(getIndexOfArrayItem(["kevin","jane","doe","john"], "jane")) // 2

  //[1,2,3,4,5]   => 3   = index 2




}
export default generics;