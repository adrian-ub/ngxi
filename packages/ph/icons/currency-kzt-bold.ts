import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztBoldIcon],svg[ph-currency-kzt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 100a12 12 0 0 1-12 12h-60v100a12 12 0 0 1-24 0V112H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12M56 64h144a12 12 0 0 0 0-24H56a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhCurrencyKztBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
