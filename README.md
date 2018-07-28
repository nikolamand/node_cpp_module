After installing Node, widnows build tools should be installed with the fallowing command
> npm install --global --production windows-build-tools

C++ code is compiled using node-gyp
configuring node-gyp is done using binding.gyp file that should look like this: 
```
{
  "targets": [
    {
      "target_name": "hello",
      "sources": [ "hello.cc" ]
    }    
  ]
}
````
binding.gyp file should contain JSON like structure that has an object called "targets"
"targets" contains array which specifies files that are going to be compiled, each element in that array contains "target_name" and "sources"
"target_name" is used to specify the name by which we will require the compiled c++ code inside the js.
"sources" contains an array of paths to the c++ files that need to be compiled, if we put in multiple paths we can use all of them by using a single require inside js. 

To compile the c++ code use
> npm install

You should now be able to use the c++ code inside JavaScrypt