{
    //Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        const objKeys = obj;
        const keysArr = keys;
        console.log(objKeys , keysArr)

        

        return true;
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}