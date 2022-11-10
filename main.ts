let y = 0
let dx = 1
let x = 0
basic.forever(function () {
    y = 0
    if (x <= 0) {
        dx = 1
    } else if (x >= 4) {
        dx = -1
    }
    basic.clearScreen()
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        y += 1
    }
    basic.pause(100)
})
