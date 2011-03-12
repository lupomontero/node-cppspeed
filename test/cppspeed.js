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
  log = function (str) { process.stdout.write(str + '\n'); },
  start, fooTime, cppfooTime;

start = +new Date();
foo();
fooTime = +new Date() - start;

start = +new Date();
cppfoo();
cppfooTime = +new Date() - start;

log('foo run in ' + fooTime + 'ms');
log('cppfoo run in ' + cppfooTime + 'ms');
log('c++ was ' + (fooTime/cppfooTime).toFixed(1) + ' times faster');
