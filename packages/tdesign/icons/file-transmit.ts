import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileTransmitIcon],svg[tdesign-file-transmit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm2 2v18h14V9h-6V3zm10 .414V7h3.586z"></svg:path><svg:path fill="currentColor" d="m13.362 10.59l2.138 2.508v1.407h-7v-2h3.866l-.526-.617zM8.5 15.495h6.996v2h-3.862l.526.617l-1.522 1.298L8.5 16.902z"></svg:path>`,
})
export class TdesignFileTransmitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
