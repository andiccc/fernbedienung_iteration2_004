serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (serial.readLine() == "temp") {
        schalter = 1
    }
    if (serial.readLine() == "licht") {
        schalter = 2
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "Temp") {
        serial.writeValue("Temperatur", value)
    }
    if (name == "Licht") {
        serial.writeValue("Lichtstaerke", value)
    }
})
let schalter = 0
let id = 0
let varfunkgruppe = 0
let Temperatur = 100
schalter = 0
radio.setGroup(varfunkgruppe)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        id = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        id = 2
    }
    if (input.buttonIsPressed(Button.AB)) {
        id = 3
    }
    if (input.logoIsPressed()) {
        id = 4
    }
    if (schalter == 1) {
        id = 5
    }
    if (schalter == 2) {
        id = 6
    }
    if (input.buttonIsPressed(Button.A) && input.logoIsPressed()) {
        if (varfunkgruppe > 0) {
            varfunkgruppe += -1
            radio.setGroup(varfunkgruppe)
            basic.showString("" + (varfunkgruppe))
            basic.pause(500)
        }
        id = 0
    }
    if (input.buttonIsPressed(Button.B) && input.logoIsPressed()) {
        if (varfunkgruppe < 10) {
            varfunkgruppe += 1
            radio.setGroup(varfunkgruppe)
            basic.showString("" + (varfunkgruppe))
            basic.pause(500)
        }
        id = 0
    }
    radio.sendNumber(id)
    basic.clearScreen()
    if (id == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (id == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (id == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (id == 4) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (id == 5) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (id == 6) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (Temperatur != 100) {
        basic.showNumber(Temperatur)
    }
    id = 0
    Temperatur = 100
    schalter = 0
})
