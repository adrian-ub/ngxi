import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePaymentMethodIcon],svg[icon-park-outline-payment-method-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 10L10 38M6 6l6 8l6-8M5 14h14M5 20h14m-7-6v12m20.846 0H42v16H22v-5.85"></svg:path>`,
})
export class IconParkOutlinePaymentMethodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
