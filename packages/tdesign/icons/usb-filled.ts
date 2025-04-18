import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUsbFilledIcon],svg[tdesign-usb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v9h2v11H2V11h2zm14 9V4H6v7zM8 6.496h2.004V8.5H8zm6 0h2.004V8.5H14z"></svg:path>`,
})
export class TdesignUsbFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
