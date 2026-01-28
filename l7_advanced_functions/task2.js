function recFunc(num) {

    console.log(num);

    if (num > 0) {
        return recFunc(num - 1);
    } 
    
    if (num <= 0) {
       return;
    }
}

recFunc(5);