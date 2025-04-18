import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSendIcon],svg[carbon-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.45 15.11l-22-11a1 1 0 0 0-1.08.12a1 1 0 0 0-.33 1L7 16L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78m-20.9 10L8.76 17H18v-2H8.76L6.55 6.89L24.76 16Z"></svg:path>`,
})
export class CarbonSendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
