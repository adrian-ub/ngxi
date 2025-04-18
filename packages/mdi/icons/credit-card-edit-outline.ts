import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardEditOutlineIcon],svg[mdi-credit-card-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 18.9l6.1-6.1l2.1 2.1l-6.1 6.1H13zm8.4-7.6l1.3 1.3c.2.2.2.5 0 .7l-1 1l-2.1-2l1-1c.1-.1.2-.2.4-.2s.3.1.4.2M11 18H4v-6h13.1L22 7.1V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zM4 6h16v2H4z"></svg:path>`,
})
export class MdiCreditCardEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
