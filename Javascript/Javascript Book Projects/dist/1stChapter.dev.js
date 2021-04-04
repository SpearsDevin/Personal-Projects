"use strict";

var total = 0,
    count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);

function fac(n) {
  if (n == 0) return 1;else return fac(n - 1) * n;
}

console.log(fac(8));
console.log("5" + 1);
var a = 1;
var b = 26;
var c = 3;
var d = 24;
var e = 5;
var f = 22;
var g = 7;
var h = 20;
var i = 9;
var j = 18;
var k = 11;
var l = 16;
var m = 13;
var n = 14;
var o = 15;
var p = 12;
var q = 17;
var r = 10;
var s = 19;
var t = 8;
var u = 21;
var v = 6;
var w = 23;
var x = 4;
var y = 25;
var z = 2;
console.log(d, e, v, i, n);
var number = 0;

while (number <= 12) {
  console.log(number);
  number = number + 2;
}

for (var number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

for (var current = 20;; current++) {
  if (currrent % 7 == 0) break;
}

console.log(current);