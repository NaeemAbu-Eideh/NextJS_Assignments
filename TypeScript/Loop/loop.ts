let sum : number = 0;
let avg: number = 0;
let list = [1,5,7,4,8,6,10];
for(let i:number = 0; i < list.length; i++){
    sum += list[i];
}

avg = sum / list.length;

console.log("Sum: " + sum);
console.log("Avarage: " + avg);