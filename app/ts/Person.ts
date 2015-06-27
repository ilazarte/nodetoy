/// <reference path="../../typings/d3/d3.d.ts" />
class Person {

  fname: string;
  lname: string;

  constructor(fname: string, lname: string) {
    this.fname = fname;
    this.lname = lname;
  }

  greet() {
    console.log("say hello to " + this.fname + " " + this.lname);
    console.log("polyglot is nice though..");
  }

  stuff() {
    console.log("this is my first name:", this.fname);
    console.log("this is a new thing", this.lname);
  }
}

var p = new Person("Selene", "Lazarte");
p.greet();

d3.select(document.body)
    .append("div")
    .text("wondering if dts are automatically used");

