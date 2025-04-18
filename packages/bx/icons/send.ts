import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSendIcon],svg[bx-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.426 11.095l-17-8A.999.999 0 0 0 3.03 4.242L4.969 12L3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81M5.481 18.197l.839-3.357L12 12L6.32 9.16l-.839-3.357L18.651 12z"></svg:path>`,
})
export class BxSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
