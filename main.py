def on_received_number(receivedNumber):
    for index in range(4):
        led.plot(0, 0)
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    for index2 in range(radio.received_packet(RadioPacketProperty.SERIAL_NUMBER)):
        basic.show_icon(IconNames.YES)
        linebeacon.start_with_device_message("0f0f0f0f0f", "1a2b3c4d5e6f70809010a0b0c0")
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    music.play(music.string_playable("- - - - - - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
    led.plot_bar_graph(0, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

fvsvs = 0
edacraft = 0
if input.logo_is_pressed():
    if True:
        edacraft = 9
    else:
        led.plot(3, 4)
        edacraft += 1
    linebeacon.start_with_device_message("0f0f0f0f0f", "1a2b3c4d5e6f70809010a0b0c0")
led.plot_bar_graph(0, 9)
radio.raise_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY)

def on_forever():
    led.plot_bar_graph(0, 0)
    radio.set_group(1)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
basic.forever(on_forever)

def on_forever2():
    global edacraft, fvsvs
    radio.set_group(1)
    linebeacon.start("0f0f0f0f0f")
    edacraft += 1
    linebeacon.start_with_device_message("0f0f0f0f0f", "1a2b3c4d5e6f70809010a0b0c0")
    led.plot_bar_graph(0, 0)
    fvsvs = 0
basic.forever(on_forever2)
