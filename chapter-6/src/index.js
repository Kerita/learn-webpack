import "react";
import "react-dom";

console.log("main.js");

setTimeout(() => {
  console.log("dynamic import");
  import(/* webpackChunkName: "module"*/ "./module").then((res) => {
    console.log(res);
  });
}, 2000);
