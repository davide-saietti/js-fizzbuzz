for(let i = 1; i <= 100; i++){
    
    if((i % 3) === 0 && (i % 5) === 0 ){
        console.log("FizzBuzz")
    }
    else if((i % 3) === 0){
     console.log("Fizz")
    }
    else if((i % 5) === 0){
    console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
/*  
step 1: creare un ciclo che stampi i numeri da 1 a 100
step 2: inserire un ciclo if così che all'interno del ciclo vengano scansionati e trattati solo determinati numeri
*/