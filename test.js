var cppfoo = require('./').foo;


function foo() {
  var i, j = 0, str = '';
  for (i = 0; i < 1000000; i++) {
    j = i + 1;
    str += 'a';
  }
  return "something";
}


var start, fooTime1, fooTime2, cppfooTime;

start = +new Date();
foo();
fooTime1 = +new Date() - start;

start = +new Date();
foo();
fooTime2 = +new Date() - start;

start = +new Date();
cppfoo();
cppfooTime = +new Date() - start;


console.log('foo 1 run in ' + fooTime1 + 'ms');
console.log('foo 2 run in ' + fooTime2 + 'ms');
console.log('cppfoo run in ' + cppfooTime + 'ms');
console.log('c++ was ' + (fooTime1/cppfooTime).toFixed(1) + ' times faster (fooTime1)');
console.log('c++ was ' + (fooTime2/cppfooTime).toFixed(1) + ' times faster (fooTime2)');

