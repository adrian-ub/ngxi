import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpLightIcon],svg[ph-currency-gbp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 208a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h4a30 30 0 0 0 30-30v-38H56a6 6 0 0 1 0-12h34V84a50 50 0 0 1 81.81-38.58a6 6 0 1 1-7.64 9.26A38 38 0 0 0 102 84v38h34a6 6 0 0 1 0 12h-34v38a41.88 41.88 0 0 1-12.63 30H184a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCurrencyGbpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
