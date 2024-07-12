import { get } from "axios";

const myfunctions = () => {

    //arrow function

    const add = (a: number, b: number): number => {
        return a + b;
    }

    const add2 = (a: number, b: number): number => a + b;

    // console.log(add2(1, 2));

    //optional parameters

    const fullName = (firstName: string, lastName?: string): string => {
        return lastName ? `${firstName} ${lastName}` : firstName;
    }

    // console.log(fullName('John',"Doe"));

    //default parameters

    const getSalary = (basic: number, bonus: number = 0): number => {
        return basic + bonus;
    }
    // console.log(getSalary(1000, 500));
    // console.log(getSalary(1000));

    const greet = (): void => {
        console.log('Hello World');
    }

    // greet();

    //rest parameters

    const addNumbers = (...numbers: number[]): number => {
        return numbers.reduce((sum, num) => sum + num, 0);  //0 + 1 + 2 + 3 + 4 + 5
    }

    // console.log(addNumbers(1, 2, 3, 4, 15));
     //Normal Function
     function add3(a: number, b: number) {
        return a + b;
    }
    console.log(add2(10, 20));


}
export default myfunctions;