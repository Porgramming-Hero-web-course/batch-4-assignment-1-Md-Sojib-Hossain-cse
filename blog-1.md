The significance of union and intersection types in Typescript.

Union Type : Union type is one of the most common type using in TypeScript . It usually build logics like JavaScript or "||" operator but looks like "|". When we expect multiple types as a value of an variable ,property or function parameter in that time we use Union types. Basic syntax of Union types:

Syntax : type exampleType = firstOptionalType | secondOptionalType;

It means exampleType could be either firstOptionalType or secondOptionalType . We can use primitive , non primitive types , interfaces , type alias and also as many types we want by separating them using "|".

Example : 
type FrontEndDeveloper = "Fakibaaz" | "Junior Developer";

const newDeveloper : FrontEndDeveloper = "Junior Developer";





InterSection Type : Intersection type is another mostly common type using in TypeScript. It usually build logics like JavaScript "&&" operator and look like "&". It usually use to combine multiple types to create a new type or veryfy a value using multiple types .If multiple type property are same(property type can't be different) then it will combine them and behave like a single type. Basic syntax of intersection type : 

Syntax : type exampleType = firstOptionalType & secondOptionalType;

It menas exampleType will have both of the types . We can also add as many types we want by separating them using "&".

Example :
type FrontEndDeveloper = {
        skills : string[];
        designation1 : "Front End Developer";
    }

    type BackEndDeveloper = {
        skills : string[];
        designation2 : "Back End Developer";
    }

    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper

    const fullStackDeveloper : FullStackDeveloper = {
        skills : ["HTML" , "CSS" , "JS" , "Express"],
        designation1 : "Front End Developer",
        designation2 : "Back End Developer",
    }