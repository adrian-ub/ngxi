import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUsbDriveSolidIcon],svg[streamline-usb-drive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 0a.5.5 0 0 0-.5.5v3.25h7V.5A.5.5 0 0 0 10 0zM2.5 6v3.5a4.5 4.5 0 1 0 9 0V6a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUsbDriveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
