var
  cppfoo = require('../cppspeed').foo,
  foo = function () {
    var i, j = 0, str = '';

    for (i = 0; i < 1000000; i++) {
      j = i + 1;
      str += 'a';
    }

    return "something";
  },
  start, fooTime, cppfooTime;

start = +new Date();
foo();
fooTime = +new Date() - start;

start = +new Date();
cppfoo();
cppfooTime = +new Date() - start;

process.stdout.write('foo run in ' + fooTime + 'ms\n');
process.stdout.write('cppfoo run in ' + cppfooTime + 'ms\n');
process.stdout.write('c++ was ' + (fooTime/cppfooTime).toFixed(1) + ' times faster');
