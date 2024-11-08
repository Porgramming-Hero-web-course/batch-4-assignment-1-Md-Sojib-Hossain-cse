Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.


Sometimes Pre defined types can't properly specified our needs . In that case we are using type guard to narrow down types and make our code more specific.

There are some kind of type guard in TypeScript. Those are: 
1. type of guard
2. In guard 
3. instance of guard


typeof guard - In typeof guard we use typeof keyword for type guard .
syntax : typeof variable/parameter ==="type" 

In guard - Type In guard use in keyword for type guard .
syntax : "propertyName/keyName" in object

In guard - instanceof guard use instanceof keyword for type guard . It usually use in class .
syntax : parameter instanceof Instance.