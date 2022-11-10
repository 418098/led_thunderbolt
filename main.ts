let y = 0
let dx = 1
let x = 0
let x2 = 0
let x3 = 0
basic.forever(function () {
    y = 0
    if (x == 0) {
        dx = 1
        x2 = x + 1
        x3 = x + 2
    } else if (x == 4) {
        dx = -1
        x2 = x - 1
        x3 = x - 2
    }
    basic.clearScreen()
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x3, y, 20)
        led.plotBrightness(x2, y, 60)
        led.plot(x, y)
        y += 1
    }
    basic.pause(100)
})
