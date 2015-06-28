'use strict';

var svg = d3.select('svg');

function observables() {

  var source = Rx.DOM.mousedown(svg.node());

  source.subscribe(
    function (x) {
      console.log('clicked!', x);
    },
    function (err) {
      console.log('Error: ' + err);
    },
    function () {
      console.log('Completed');
    });

}

observables();
