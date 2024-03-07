// HW 1

let i = 0;
while(i<=10){
    console.log(i++);
}

// HM 2
for(let i = 2; i<=20; i++){
    if (i % 2 === 0)
    console.log(i);
}

for(let i = 0; i<=20; i++){
    if (i % 2 !== 0)
    console.log(i);
}

for(let i = 2; i<=20; i++){
    if (i === i++){
        continue;
    }
    console.log(i);
}

// HW 3

let arr = ['1','2','3','4','5'];
let num = 0;
while(arr.length > num){
    console.log(arr[num]);
    num++;
}
