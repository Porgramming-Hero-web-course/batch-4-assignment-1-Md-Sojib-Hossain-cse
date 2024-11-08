{
    //Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

    function validateKeys<T extends object>(obj: T, keys: string[]) {
        const keysArr = keys;
        const objKeys = Object.keys(obj);
        let terminated = true;
        keysArr.forEach((key) => {
            if(!objKeys.includes(key)){
                terminated = false;
            }
        })
        return terminated;
    }

    // const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(validateKeys(person, ["name", "age"]));
}