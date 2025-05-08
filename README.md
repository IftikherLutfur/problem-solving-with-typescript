## What are some differences between interfaces and types in TypeScript?
Answer: Interface is a structure that is used to define the properties of an object or class along with their data types.
On the other hand, Type is a way to define a custom data type.

With an interface, we can specify exactly which properties an object must have and what types those properties should be.
With type, we use type aliases to define various types such as objects, primitives, unions, tuples, etc.

🔸 Basic Differences Between Interface and Type:
Intention:
Interface is mainly used for defining the structure of an object.
Type is used to define any kind of data type (e.g., object, string, number, union, etc.).

Name Reuse:
Multiple interfaces with the same name can be declared and merged.
But declaring multiple types with the same name causes an error.

Extending:
Interface can extend another interface directly.
Type can also extend others, but it does so differently — using union (|) or intersection (&) operators.

## How does TypeScript help in improving code quality and project maintainability?
Answer: By coding with TypeScript, type definitions are used, which helps reduce mistakes as a developer and decreases runtime errors. As a result, identifying and solving errors becomes easier and quicker. Due to type definitions, it becomes clear what type of data a function will return. Working with TypeScript also benefits teamwork, as team members can easily understand each other’s code. In conclusion, TypeScript has helped developers make fewer mistakes, and error handling has become easier.
