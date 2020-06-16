function fat(n) {
    /*if(n==1) {
        return n;
    } else {
        return n*fat(n-1);
    }*/

    let fat = 1;
    for (let i = n; i > 1; i--) {
        fat *= i;
    }
    return fat;
}

console.log(fat(10));