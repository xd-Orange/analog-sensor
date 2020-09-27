let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(value)
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 965) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
