let names = ["John","Sara","Terminator","Admiral"];
let nameL = names.push("Skynet");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
  names.splice(names,1);
  names.forEach(element => console.log(element));
  
  