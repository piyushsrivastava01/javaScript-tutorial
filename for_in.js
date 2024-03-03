const map = new Map()
   map.set('IN', "India")
   map.set('USA', "United State Of America")
   map.set('Fr', "France")
   map.set('IN', "India")
    //  console.log(map);
    // for (const key in map) {
    //    console.log(key);
    // }

    // Objects ;;


    const myObject = {
        'game': "ViceCity",
        'game2': "SanAndreass",
        'game3': "Spidernam"
    }
    // for (const [key, Value] in myObject) {
    //   console.log( key, '-:', Value);
    // }


    // new Program:::::


    const MyObject={
        js: "javaScript",
        cpp: "C++",
        rb: "ruby",
        dsa: "Data Structure Algorithem"
    }

    for (const key in MyObject) {
    //   console.log(key);
    //   console.log(MyObject);
      // console.log(`for this tittle: ${key}  second value is: ${MyObject}`);
    }


    // New program:::::;


    const Program= ["js","cpp","Dsa","html","Css"]
    for (const key in Program) {
      console.log(key);
      console.log(Program[key]);
    }