console.log("git");

/* function getNameHandle(params) {
  params = { name: "1212" };
  return params;
}
getNameHandle(); */

/* 函数传参，实参是引用类型时，传递的是引用类型地址 */
var arr = [12, 13, 15];
function updateArrayHandle(arr) {
  console.log(arr); // => [ 12, 13, 15 ]
  arr[0] = 100;
  arr = [100];
  arr[0] = 0;
  console.log(arr); // => [ 0 ]
}
updateArrayHandle(arr);
console.log(arr); // => [ 100, 13, 15 ]
