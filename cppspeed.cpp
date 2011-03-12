#include <string>
#include <v8.h>
#include <node.h>

using namespace std;
using namespace v8;
using namespace node;

static Handle<Value> foo(const Arguments& args)
{
  int i, j;
  string str;

  for (i = 0; i < 1000000; i++) {
    j = i + 1;
    str += "a";
  }

  return String::New("something");
}

extern "C" {
  static void init(Handle<Object> target)
  {
    NODE_SET_METHOD(target, "foo", foo);
  }

  NODE_MODULE(cppspeed, init);
}
