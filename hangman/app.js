//Prototypical Inheritance

// Object: myObject --> Object.prototype --> null

//// Array: myArray --> Array.prototype --> Object.prototype --> null

const team = ['luke','Maddision']
Array.prototype.fill = ()=>{return 'fill method'}
console.log(team);
console.log(team.fill);
console.log(team.hasOwnProperty('fill'));

//// Function: myFunction --> Function.prototype --> Object.prototype --> null

const getScore = () => 1
console.log(getScore)


//// Strings: myString --> String.prototype --> Object.prototype --> null

const product = 'computer'
console.log(product);
const otherProduct = new String('Phone')
console.log(otherProduct);

//Primitive value: string,number,boolean,null,undefined
//// Number: myNum --> Number.prototype --> Object.prototype --> null
//// Boolean: myBol --> Boolean.prototype --> Object.prototype --> null
//null,undefined dont have objects