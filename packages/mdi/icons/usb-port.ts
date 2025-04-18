import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUsbPortIcon],svg[mdi-usb-port-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2c-1.1 0-2 .9-2 2v8H5v4l4 4v2h6v-2l4-4v-4h-1V4a2 2 0 0 0-2-2M8 4h8v8H8m1-5v2h2V7m2 0v2h2V7Z"></svg:path>`,
})
export class MdiUsbPortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
