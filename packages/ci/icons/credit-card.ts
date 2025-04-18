import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCreditCardIcon],svg[ci-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 12v6h16v-6H4Zm0-6v2h16V6H4Zm9 10H6v-2h7v2Z"></svg:path>`,
})
export class CiCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
