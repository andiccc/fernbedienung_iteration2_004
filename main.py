radio.set_group(0)
id2 = 0

def on_forever():
    global id2
    if input.button_is_pressed(Button.A):
        id2 = 1
    if input.button_is_pressed(Button.B):
        id2 = 2
    if input.button_is_pressed(Button.AB):
        id2 = 3
    radio.send_number(id2)
    basic.clear_screen()
    if id2 == 1:
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    elif id2 == 2:
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    elif id2 == 3:
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    else:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    id2 = 0
basic.forever(on_forever)
