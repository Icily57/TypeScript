const typeCasting_Omit = () => {
    //TypeCasting : Typecasting is a way to convert a variable from one data type 
    // to another data type.
    //natively in javascript we can convert a string to a number by using the parseInt() function.
    // let portNumber = parseInt(port);

    //.env file port ==string
    let port: any = "300";
    //1. - cast with as

    // let portNumber = port as number; 

    //2.- cast with <>
    let portNumber = <number>port;

    //OMIT
    /*
      Omit is a mapped type that lets you create a new type by omitting some properties from an existing type.
     */

    type employedPerson = {
        id: number;
        name: string;
        age: number;
        workPlace: string;
    };

    type unemployedPerson = Omit<employedPerson, "workPlace">;

    let employee1: employedPerson = {
        id: 1,
        name: "Kevin",
        age: 30,
        workPlace: "Teach2Give"
    };

    let employee2: unemployedPerson = {
        id: 2,
        name: "Brian Kemboi",
        age: 23
    };
}








export default typeCasting_Omit;