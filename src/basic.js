function welcome(){
    return "Hello World";
};

function evenOrOdd(n){

    if (n%2 ===0) {
    return "even";
    }
    if (n%2 !== 0) {; 
    return "odd";
    }
};

function greeting(name) {
    return "Hola, "+name+"!";
 };


export { evenOrOdd, greeting, welcome }