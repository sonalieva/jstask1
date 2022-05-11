// var arr=[1,2,3,5,6,7]
// function findmaxnum(arr){
//     let max=0
//     for(var i = 0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]

//         }
        

//     }
//     return max;
    
// }
// var num = findmaxnum(arr);
// console.log(num);
var arr =[1,2,3,4,5,6,7]
function findevennum(arr){
   let sum = 0
   for(var i = 0;i<arr.lenght;i++){
       if(arr[i]%2==0){
           sum+=arr[i]
       }
   }
   return sum ;

}
var sum = findevennum(arr);
console.log(sum);


var num1=prompt("Eded 1");
var num2=prompt("Eded 2");
function findpower(num1 ,num2){
    var power=1;
    for(var i = 1 ;i<=num2;i++){
        power*=num1
    }
    return power;
}
alert(Power(num1 ,num2));


 
