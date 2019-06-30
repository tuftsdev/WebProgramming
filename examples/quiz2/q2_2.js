var a = 6;
var b = 5;

function foo(a) {
  console.log(a * b);
}

function bar() {
  var a = 5;
  for (b = 0; b < 3; b++) {
    console.log(b * a);
  }
}

foo(3);
bar();
console.log(a);
console.log(b);
