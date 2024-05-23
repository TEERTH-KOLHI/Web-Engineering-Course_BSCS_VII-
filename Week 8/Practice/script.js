const huni = {
    name :'Hanzla',
    age : 22,
    gender : "male"
}
const obj = huni;
obj.name = "Huni";
console.log(huni);
console.log(`Hanzla has ${huni.gender} friends`);
const{name,age,...rest}= obj;
console.log(name);
console.log(age);
console.log(rest);