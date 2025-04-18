import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcBoldIcon],svg[ph-currency-btc-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.08 114.46A48 48 0 0 0 160 37.52V24a12 12 0 0 0-24 0v12h-16V24a12 12 0 0 0-24 0v12H72a12 12 0 0 0 0 24h4v128h-4a12 12 0 0 0 0 24h24v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12a52 52 0 0 0 25.08-97.54M172 84a24 24 0 0 1-24 24h-48V60h48a24 24 0 0 1 24 24m-12 104h-60v-56h60a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhCurrencyBtcBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
