import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCreditCardRefundIcon],svg[tabler-credit-card-refund-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5M3 10h18M7 15h.01M11 15h2m3 4h6m-3-3l-3 3l3 3"></svg:path>`,
})
export class TablerCreditCardRefundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
