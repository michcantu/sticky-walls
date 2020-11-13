let _1: game.LedSprite = null
let _2: game.LedSprite = null
let _3: game.LedSprite = null
let _4: game.LedSprite = null
let _5: game.LedSprite = null
let _6: game.LedSprite = null
let _7: game.LedSprite = null
let player: game.LedSprite = null
let dice = 0
input.onButtonPressed(Button.A, function () {
    player.turn(Direction.Right, 180)
    player.move(1)
})
input.onPinPressed(TouchPin.P2, function () {
    player.turn(Direction.Right, 90)
    player.move(1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    player.turn(Direction.Left, 90)
    player.move(1)
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 1)
    basic.showNumber(dice)
    if (dice == 1) {
        _1 = game.createSprite(0, 1)
        _2 = game.createSprite(0, 2)
        _3 = game.createSprite(3, 4)
        _4 = game.createSprite(1, 3)
        _5 = game.createSprite(2, 4)
        _6 = game.createSprite(1, 1)
        _7 = game.createSprite(3, 2)
        basic.pause(500)
        player = game.createSprite(0, 0)
    } else if (dice == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    } else if (dice == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (dice == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (dice == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (dice == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    	
    } else if (input.buttonIsPressed(Button.B)) {
    	
    } else if (input.pinIsPressed(TouchPin.P1)) {
    	
    } else if (input.pinIsPressed(TouchPin.P2)) {
    	
    }
})
