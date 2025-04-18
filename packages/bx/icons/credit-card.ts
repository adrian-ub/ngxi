import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCreditCardIcon],svg[bx-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M4 6h16v2H4zm0 12v-6h16.001l.001 6z"></svg:path><svg:path fill="currentColor" d="M6 14h6v2H6z"></svg:path>`,
})
export class BxCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
