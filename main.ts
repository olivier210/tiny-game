let _1 = 0
input.onButtonPressed(Button.A, function () {
    _1 = 0
})
input.onGesture(Gesture.Shake, function () {
    _1 = randint(0, 10)
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(_1)
    basic.pause(1000)
    basic.clearScreen()
})
