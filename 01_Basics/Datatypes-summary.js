// Primitive Datatypes 

// String
// Number
// Boolean
// Undefined
// Null
// BigInt   
// Symbol   ===> Used to make unique values

// Non-Primitive (Reference type)

// Objects, Array, Function (Their Types are objects)

// typeOf function is Function but actualy it is called as object Fuction


// Stack(Primitive) & Heap(Reference)

// Primititive provides the copy of that value
// Refernce provides the actual value 

const obj = {
    name : 'varshil',
    age : 22
}

const newObj = obj
newObj.name = 'Ravi'
console.log(obj.name)
console.log(newObj.name)
//  Here not only in the newObj but the obj value will also change as references are store in the heap.