import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileTransmitFilledIcon],svg[tdesign-file-transmit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zm-1.138 3.09l2.138 2.508v1.407h-7v-2h3.866l-.526-.617zM8.5 15.495h6.996v2h-3.862l.526.617l-1.522 1.298L8.5 16.902z"></svg:path>`,
})
export class TdesignFileTransmitFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
