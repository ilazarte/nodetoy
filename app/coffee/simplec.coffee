console.log "hello from coffeescript"

class D3
  constructor: (@message) ->

  say: ->
    console.log @message

d = new D3("HELLO WORLD BOSS - i wonder which one is best")
d.say()

class NoiseyLine

  run: ->
    step = 10
    lastx = -999
    lasty = -999
    y = 50
    borderx = 20
    bordery = 10
    x = borderx

    while (x <= width - borderx)
      y = bordery + random(height - 2 * bordery)
      if (lastx > -999)
        line(x, y, lastx, lasty)
      lastx = x
      lasty = y
      x += step

    null



