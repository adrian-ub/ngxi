import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardMinusOutlineIcon],svg[mdi-credit-card-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 18v2h-8v-2m3-10V6H3v2zm0 4H3v6h11v2H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2v7h-2z"></svg:path>`,
})
export class MdiCreditCardMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
