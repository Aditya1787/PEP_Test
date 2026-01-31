function transform(a){
    return a.map(n=>n%2==0?n*n:n)
}
console.log(transform([2, 3, 4, 5, 6]))