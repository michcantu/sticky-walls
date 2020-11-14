input.onPinPressed(TouchPin.P0, function () {
    dice = randint(1, 1)
    basic.showNumber(dice)
    if (dice == 1) {
        basic.showLeds(`
            . # . . #
            . . . . #
            . . # . .
            # . # . #
            # . . . .
            `)
        led.plot(x, y)
        while (x == 1 && y == 0) {
            basic.clearScreen()
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            basic.showString("You Lost")
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . . # # .
                    . # . . #
                    `)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # # . .
                    # . . # .
                    `)
            }
        }
    } else if (dice == 2) {
        basic.showLeds(`
            . . . # #
            # . . . .
            # . # # .
            . . . . .
            . # . . .
            `)
        led.plot(x, y)
        while (x == 1 && y == 0) {
            basic.clearScreen()
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            basic.showString("You Lost")
        }
    } else if (dice == 3) {
        basic.showLeds(`
            . . . # .
            . . . # .
            # # . . .
            . . . . #
            . # # . .
            `)
        led.plot(x, y)
        while (x == 1 && y == 0) {
            basic.clearScreen()
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            basic.showString("You Lost")
        }
    } else if (dice == 4) {
        basic.showLeds(`
            . . # . #
            . . # . .
            # . . # .
            # . . . .
            . . # # .
            `)
        led.plot(x, y)
        while (x == 1 && y == 0) {
            basic.clearScreen()
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            basic.showString("You Lost")
        }
    } else if (dice == 5) {
        basic.showLeds(`
            . . . # .
            # # . # .
            . . . . .
            . # . # #
            # . . . .
            `)
        led.plot(x, y)
        while (x == 1 && y == 0) {
            basic.clearScreen()
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            basic.showString("You Lost")
        }
    } else if (dice == 6) {
        basic.showLeds(`
            . . # . #
            . # . . .
            . . . # #
            # . . . .
            # . # . .
            `)
        led.plot(x, y)
        while (x == 1 && y == 0) {
            basic.clearScreen()
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            basic.showString("You Lost")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    basic.pause(100)
    x += -1
    led.toggle(x, y)
})
input.onPinPressed(TouchPin.P2, function () {
    led.unplot(x, y)
    basic.pause(100)
    y += 1
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    basic.pause(100)
    x += 1
    led.plot(x, y)
})
input.onPinPressed(TouchPin.P1, function () {
    led.unplot(x, y)
    basic.pause(100)
    y += -1
    led.plot(x, y)
})
let dice = 0
let y = 0
let x = 0
x = 4
y = 4
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        while (x == 0 && y == 0) {
            basic.clearScreen()
            music.playMelody("D G E A C5 F C B ", 387)
            basic.showString("You Won")
        }
    }
    basic.clearScreen()
})
