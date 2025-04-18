import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCellphoneMessageOffIcon],svg[mdi-cellphone-message-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l1.11 1.11C2.08 4.38 2 4.68 2 5v14a2 2 0 0 0 2 2h7c1.1 0 2-.9 2-2v-4.11l7.84 7.84l1.27-1.27zM11 17H4V7h1.11L11 12.89zM23 4.5v3c0 .83-.67 1.5-1.5 1.5H18l-2.9 2.9l-.1-.1V4.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5M10.2 7l-4-4H11c1.1 0 2 .9 2 2v4.8l-2-2V7z"></svg:path>`,
})
export class MdiCellphoneMessageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
