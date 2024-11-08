{
    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface Profile {
        name: string;
        age: number;
        email: string;
    }


    function updateProfile(obj1 : Profile , obj2 : Partial<Profile>) : Profile { 
        if(obj2?.name){
            obj1.name = obj2.name;
        }
        else if(obj2?.age){
            obj1.age = obj2.age;
        }
        else if(obj2?.email){
            obj1.email = obj2.email;
        }
        return obj1;
    }


    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, { email: "sojibhossain.cse@gmail.com" }));
}