var arr = ['Cat', 'Dog', 'Dear', 'Bear']
console.log('array=', arr, typeof (arr));

console.log('..........Length.......');
console.log(arr.length)

console.log('..........Indexes of each element.......');

for (i = 0; i < arr.length; i++) {
    console.log(arr[i], i)
}

//or
arr.forEach(function (curr,index,arr){
    console.log(curr,index)
})

console.log('..........Push method.......');

a = arr.push('elephant', 'ONE', 2, true);
console.log('new arr=', arr);
console.log(arr.length)
console.log(typeof arr)

console.log('..........unshift method.......');
b = arr.unshift('5', 6, false);
console.log('new arr=', arr);
console.log(arr.length);
console.log(typeof arr);

console.log('..........pop method.......');

c = arr.pop(); // at a time one value can be remove
console.log('new arr=', arr);
console.log(arr.length);
console.log(typeof arr);

// at a time multiple value to be remove its possible

for (i = 0; i < 3; i++) {
    d = arr.pop();
    console.log('new arr=', arr);
    // console.log(d.length);
    // console.log(typeof d);
}

console.log('..........shift method.......');

e= arr.shift(); // at a time one value can be remove
console.log('new arr=', arr);
console.log(arr.length);
console.log(typeof arr);

// at a time multiple value to be remove its possible

for (i = 0; i < 3; i++) {
    f = arr.shift();
    console.log('new arr=', arr);
    // console.log(d.length);
    // console.log(typeof d);
}

console.log('..........reverse method.......');
g=arr.reverse();
console.log(arr)
 
console.log('..........concat method.......');

h=[1,2,'five'];
j=[false,null,''];
j1=[45]
k=h.concat(j,j1,true);
console.log(k)

k=h+j;
console.log(k)

console.log('..........join method.......');
l=arr.join('');
console.log(l)

console.log('..........indexOf method.......');

m=arr.indexOf('Dog')
console.log(m)

m=arr.indexOf('dear')
console.log(m);

console.log('..........slice method.......');

arr1=[1,'Banana',"five",false,true,null,"Ten"];
console.log(arr1);
console.log(arr1.length);
for(i=0;i<arr1.length;i++){
    console.log(arr1[i],i)
}

var o=arr1.slice(-6);
console.log('slice arr1=',o);
console.log(o.reverse());


console.log('..........splice method.......');

arr1.splice(3,1,'vicky');
console.log(arr1)

arr1.splice(3,0,'vicky');
console.log(arr1);


console.log('..........forEach method.......');

var p=[1,5,7,89,45];
p.forEach(function (curr,index,arr)
   {console.log(curr,index)}
);

//or

for(i=0; i< p.length; i++){
    console.log(p[i],i)
}

console.log('..........includs method.......');

r=p.includes(45);
console.log(r)//true

r=p.includes(49);
console.log(r) //false

console.log('..........filter method.......');

r1=p.filter(num=> num<10);
console.log(r1)

r1=p.filter(num=> num>10);
console.log(r1)

console.log('..........map method.......');


p.map(function demo(curr){
    console.log(curr+2)
})

p.map(function demo(curr){
    console.log(Math.sqrt(curr))
})


// function Submit(){
//     var a = document.getElementById('uName').value ;
//     var b = prompt('please enter userName');
//     if(a==b){
//         var res = confirm('please confirm the Username');
//         if (res== true){
//             alert('userName is correct')
//             document.write('WelCome')
//         }
//         else{
//             alert('Please enter userName again');
//             document.write('Enter userName again');
//         }
//     }
//     else{
//         alert('Enterd name is wrong');
//         document.write('Sorry');
//     }
// }

// arr2=[1,'five',true,'vicky']
// r5=arr2.join(' + ');
// console.log(r5)


// function fun1(){
//     var a=prompt("Enter your age");
//     if(a==''|| a==null){
//         alert("Wrong input")
//     } else if(a<16){
//         alert('You are not eligible')
//     }else{
//         b=confirm('Are u really want to going FB');
//         if(b==true){
//             window.location.assign("https://www.facebook.com/")
//         }
//        else{
//         alert('SORRY...!!')
//        }
//     }
// }

var  abc  =(a,b)=>{
    sum=a+b;
    console.log(sum)

}
abc(41,5);