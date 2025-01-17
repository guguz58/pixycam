let sync = 0
let checksum = 0
let signatureNum = 0
let X = 0
let Y = 0
let width = 0
let height = 0
basic.forever(function () {
    sync = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
    if (sync == -21931) {
        sync = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
        if (sync == -21931) {
            checksum = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            signatureNum = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            X = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            Y = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            width = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            height = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            if (width < 100) {
                if (X < 140) {
                    nexusbit.DC(dcMotor.P13_14, 25)
                    nexusbit.DC(dcMotor.P15_16, 0)
                } else if (X >= 220) {
                    nexusbit.DC(dcMotor.P13_14, 0)
                    nexusbit.DC(dcMotor.P15_16, 25)
                } else {
                    nexusbit.DC(dcMotor.P13_14, 25)
                    nexusbit.DC(dcMotor.P15_16, 25)
                }
            } else if (width >= 160) {
                if (X < 140) {
                    nexusbit.DC(dcMotor.P13_14, 0)
                    nexusbit.DC(dcMotor.P15_16, -25)
                } else if (X >= 220) {
                    nexusbit.DC(dcMotor.P13_14, -25)
                    nexusbit.DC(dcMotor.P15_16, 0)
                } else {
                    nexusbit.DC(dcMotor.P13_14, -25)
                    nexusbit.DC(dcMotor.P15_16, -25)
                }
            } else {
                nexusbit.DC(dcMotor.P13_14, 0)
                nexusbit.DC(dcMotor.P15_16, 0)
            }
        }
    } else {
        nexusbit.DC(dcMotor.P13_14, 0)
        nexusbit.DC(dcMotor.P15_16, 0)
    }
})
