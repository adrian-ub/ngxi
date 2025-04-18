import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPaymentMethodIcon],svg[icon-park-payment-method-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 10L10 38"></svg:path><svg:path d="M6 6L12 14L18 6"></svg:path><svg:path d="M5 14H19"></svg:path><svg:path d="M5 20H19"></svg:path><svg:path d="M12 14V26"></svg:path><svg:path d="M32.8462 26H42V42H22V36.15"></svg:path></svg:g>`,
})
export class IconParkPaymentMethodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
