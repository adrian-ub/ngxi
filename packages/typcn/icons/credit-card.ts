import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnCreditCardIcon],svg[typcn-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7H6c-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3m1 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4h13zm0-6H5v-1a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1zm-4 5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1"></svg:path>`,
})
export class TypcnCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
