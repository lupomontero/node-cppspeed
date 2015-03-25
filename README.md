# Node.js modules speed test: C++ vs JavaScript

[![Build Status](https://travis-ci.org/lupomontero/node-cppspeed.svg?branch=master)](https://travis-ci.org/lupomontero/node-cppspeed)

## Download and build

```sh
# Install node-gyp globally if not installed yet
npm install -g node-gyp

# Clone, build and test
git clone git://github.com/lupomontero/node-cppspeed.git
cd node-cppspeed
node-gyp configure build
```

## Run

```sh
npm test
```

You should see output like below:

```
foo 1 run in 100ms
foo 2 run in 59ms
cppfoo run in 5ms
c++ was 20.0 times faster (fooTime1)
c++ was 11.8 times faster (fooTime2)
```
