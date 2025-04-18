import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerConnectionUsbPortCablesCableDeviceComputerPortElectronicsCordsCordUsbIcon],svg[streamline-computer-connection-usb-port-cables-cable-device-computer-port-electronics-cords-cord-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.97" cy="11.5" r="2"></svg:circle><svg:path d="M6.97 9.5v-9M5.47 2L6.97.5L8.47 2M6 9.78a4.14 4.14 0 0 1-2.6-2.29"></svg:path><svg:circle cx="3.22" cy="6.25" r="1.25"></svg:circle><svg:path d="M7 8.6a5.6 5.6 0 0 0 3.49-3.07"></svg:path><svg:circle cx="10.78" cy="4.32" r="1.25"></svg:circle></svg:g>`,
})
export class StreamlineComputerConnectionUsbPortCablesCableDeviceComputerPortElectronicsCordsCordUsbIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
