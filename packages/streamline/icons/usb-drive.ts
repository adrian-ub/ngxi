import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUsbDriveIcon],svg[streamline-usb-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 9V5.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1V9a4.5 4.5 0 1 1-9 0M4 .5v4h6v-4z"></svg:path>`,
})
export class StreamlineUsbDriveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
