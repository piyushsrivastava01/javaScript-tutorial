let date = new Date()
 console.log(date);
 console.log(date.toString());
 console.log(date.toLocaleString());
console.log(typeof date);

// specific typeof Date......

let time = new Date(2024,4,12,16,47)
console.log(time.toLocaleString());

// DD/MM//YY -:::

let variable = ("2024-8-10")
console.log(variable.toLocaleString());
// console.log(variable.togetTime());

 let Time = Date.now()
 console.log(Time);
 console.log(Math.floor(Date.now()/1000));


 // there is the some methods for change the value.......


 let newdate = Date.now()
 console.log(newdate);
 console.log((newdate.togetDay+1));
//  console.log(newdate.togetDay());
//  console.log(newdate.togetDay());