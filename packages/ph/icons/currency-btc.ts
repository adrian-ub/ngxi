import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcIcon],svg[ph-currency-btc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.48 115.7A44 44 0 0 0 152 40.19V24a8 8 0 0 0-16 0v16h-16V24a8 8 0 0 0-16 0v16H72a8 8 0 0 0 0 16h8v136h-8a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h8a48 48 0 0 0 18.48-92.3M176 84a28 28 0 0 1-28 28H96V56h52a28 28 0 0 1 28 28m-16 108H96v-64h64a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhCurrencyBtcIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
