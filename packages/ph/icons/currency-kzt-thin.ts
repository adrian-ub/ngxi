import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztThinIcon],svg[ph-currency-kzt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 96a4 4 0 0 1-4 4h-68v116a4 4 0 0 1-8 0V100H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M56 60h144a4 4 0 0 0 0-8H56a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhCurrencyKztThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
