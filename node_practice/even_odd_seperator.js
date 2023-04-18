const arr = [1,2,3,9,10,34,134,4]
const a =[]
const b= []
for(var i =0;i< arr.length;i++){
    if(arr[i]%2 == 0){
        a.push(arr[i])
    }
    else 
    b.push(arr[i])
}

console.log(a)
console.log(b)