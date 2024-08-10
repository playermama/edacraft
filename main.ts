radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    for (let index = 0; index < 4; index++) {
        led.plot(0, 0)
    }
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    for (let index2 = 0; index2 < radio.receivedPacket(RadioPacketProperty.SerialNumber); index2++) {
        basic.showIcon(IconNames.Yes)
        linebeacon.startWithDeviceMessage("0f0f0f0f0f", "1a2b3c4d5e6f70809010a0b0c0")
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    led.plotBarGraph(0, 0)
})
let fvsvs = 0
let edacraft = 0
if (input.logoIsPressed()) {
    if (true) {
        edacraft = 9
    } else {
        led.plot(3, 4)
        edacraft += 1
    }
    
    linebeacon.startWithDeviceMessage("0f0f0f0f0f", "1a2b3c4d5e6f70809010a0b0c0")
}

led.plotBarGraph(0, 9)
radio.raiseEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY)
basic.forever(function on_forever() {
    led.plotBarGraph(0, 0)
    radio.setGroup(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function on_forever2() {
    
    radio.setGroup(1)
    linebeacon.start("0f0f0f0f0f")
    edacraft += 1
    linebeacon.startWithDeviceMessage("0f0f0f0f0f", "1a2b3c4d5e6f70809010a0b0c0")
    led.plotBarGraph(0, 0)
    fvsvs = 0
})
