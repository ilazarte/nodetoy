'use strict';

var svg = d3.select('svg');

let logger = x => console.log('event: ', x),
  completed = () => R.partial(logger, "completed");

function observables() {

  let source = Rx.DOM.mousemove(svg.node())
    .map(event => ({
      x: event.clientX,
      y: event.clientY
    }))
    .bufferWithCount(5);

  source.subscribe(logger, null, completed);
}

observables();
