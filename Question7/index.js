function counter(){
let c=0
return function(){
c++
return c
}
}
const inc=counter()
console.log(inc())
console.log(inc())
