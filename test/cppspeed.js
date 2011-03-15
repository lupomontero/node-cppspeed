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
  start, fooTime1, fooTime2, cppfooTime;

start = +new Date();
foo();
fooTime1 = +new Date() - start;

start = +new Date();
foo();
fooTime2 = +new Date() - start;

start = +new Date();
cppfoo();
cppfooTime = +new Date() - start;


log('foo 1 run in ' + fooTime1 + 'ms');
log('foo 2 run in ' + fooTime2 + 'ms');
log('cppfoo run in ' + cppfooTime + 'ms');
log('c++ was ' + (fooTime1/cppfooTime).toFixed(1) + ' times faster (fooTime1)');
log('c++ was ' + (fooTime2/cppfooTime).toFixed(1) + ' times faster (fooTime2)');
