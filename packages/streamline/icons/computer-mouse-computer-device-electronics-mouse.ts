import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerMouseComputerDeviceElectronicsMouseIcon],svg[streamline-computer-mouse-computer-device-electronics-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="7" height="10.5" x="1" y="3" rx="3.5"></svg:rect><svg:path d="M1 7h7M4.5 7V2.75A2.25 2.25 0 0 1 6.75.5h0A2.25 2.25 0 0 1 9 2.75V3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V1.5"></svg:path></svg:g>`,
})
export class StreamlineComputerMouseComputerDeviceElectronicsMouseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
