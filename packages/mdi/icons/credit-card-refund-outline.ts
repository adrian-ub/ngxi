import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardRefundOutlineIcon],svg[mdi-credit-card-refund-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m0 10H6v-4h12zm0-6H6v-2h12zM17 5v5h-1.5V6.5H9.88l2.42 2.43L11.24 10L7 5.75l4.24-4.25l1.06 1.07L9.88 5z"></svg:path>`,
})
export class MdiCreditCardRefundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
