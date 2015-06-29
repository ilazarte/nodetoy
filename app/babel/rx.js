'use strict';

var svg = d3.select('svg');

class Node {
  constructor(parent, name) {
    this.node = d3.select(parent).append(name);
    this.name = name;
  }

  exists() {
    return this.node ? true : false;
  }

  remove() {
    d3.select(this.node).remove();
  }

  toString() {
    return this.name;
  }
}

function observables() {

  let source = Rx.DOM.mousedown(svg.node()),
    log = x => console.log('clicked', x),
    err = e => console.log(e),
    com = () => console.log("completed"),
    node = new Node(svg, "div");

  source.subscribe(log, err, com);
  console.log("the output of my node value", node);
}

observables();
