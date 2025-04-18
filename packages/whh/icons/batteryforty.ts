import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBatteryfortyIcon],svg[whh-batteryforty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512h-96v128q0 53-37.5 90.5T768 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h640q53 0 90.5 37.5T896 128v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 512M768 186q0-24-17-41t-42-17H443q-25 0-42 17t-17 41v396q0 24 17 41t42 17h266q25 0 42-17t17-41z"></svg:path>`,
})
export class WhhBatteryfortyIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
