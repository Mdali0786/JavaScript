function a(){
    let a = 10
    return function(){
    console.log(a)
}
}
var b = a()
b()
