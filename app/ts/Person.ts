class Person {

  fname: string;
  lname: string;

  constructor(fname: string, lname: string) {
    this.fname = fname;
    this.lname = lname;
  }

  greet() {
    console.log("say hello to " + this.fname + " " + this.lname);
    console.log("the polyglot is nice though..")
  }
}

var p = new Person("Selene", "Lazarte");
p.greet();
