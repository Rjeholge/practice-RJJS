// let hello = 'Hello World';
// alert('Hello World');
// let int1 = 1;
// alert(int1);
// alert(4 + 3);
// alert('Hello' + 'World');
// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);

// 条件分岐 //

// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// 繰り返し処理//

let max = 1000;
let num = 1;
let count = 0;

while(num < max){
  num = num*6;
  count = count+1;
}

alert('6を掛け続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');