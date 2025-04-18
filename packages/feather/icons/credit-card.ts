import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherCreditCardIcon],svg[feather-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="16" x="1" y="4" rx="2" ry="2"></svg:rect><svg:path d="M1 10h22"></svg:path></svg:g>`,
})
export class FeatherCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
