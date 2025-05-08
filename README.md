### 1. Differences between Interface and types in Typescript

1. The main difference is, we can use types for defining type for both primitive and non-primitive datas.On the other hand,we can only use Interface to define type for non-primitive data types.
2. If we want to extend any type from a parent type,for types we have to use (&) sign for this.But for interface we have to use extends keyword.
3. If we want to define a number type,we can easily do this through types.But we cannot define a number type through interface.


### 2. Use case of keyof in Typescript
By keyof keyword,we can set type of a key of an object.If i have a parent object types or interface,we can use literal type using keyof keyword of keys of this object.Here is an example of how we can define type by keyof keyword..
For example : 

    interface Developer {
        skills: string;
        experience: string;
        havePatience: boolean;
    };

    types SkilledDeveloper = keyof Developer;


### 3. Typescript increase code quality
Typescript is a statically typed language that checks type while compiling the code.So,we get error at the very first time rather than when the code is running. Typescript also helps us to catch bugs at the compile time rather than at runtime. These are the main advantages of Typescript over JavaScript.For that type of advantages,we can easily structured our project and make it more scalable and maintainable.


### 4. Example of Union and intersection type in Typescript
When we use '|' this symbol to define a literal type,then it is called Union type.To use this,one of the value is matched,then it will work.For example : 

        type Person = 'name' | 'age' | 'phone';

When we use '&' this symbol to define a literal type,then it is called Intersection type.To use this,all the values have to be matched to go to next step,otherwise error will be shown.For example : 

        type Developer = Person & { skills: string };