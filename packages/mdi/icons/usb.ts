import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUsbIcon],svg[mdi-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7v4h1v2h-3V5h2l-3-4l-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93A2.2 2.2 0 0 0 7 6.8c-1.22 0-2.2.98-2.2 2.2c0 .85.5 1.56 1.2 1.93V13a2 2 0 0 0 2 2h3v3.05c-.71.36-1.2 1.1-1.2 1.95a2.2 2.2 0 0 0 2.2 2.2a2.2 2.2 0 0 0 2.2-2.2c0-.85-.49-1.59-1.2-1.95V15h3a2 2 0 0 0 2-2v-2h1V7z"></svg:path>`,
})
export class MdiUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
