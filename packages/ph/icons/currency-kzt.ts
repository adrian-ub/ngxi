import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztIcon],svg[ph-currency-kzt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a8 8 0 0 1-8 8h-64v112a8 8 0 0 1-16 0V104H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M56 64h144a8 8 0 0 0 0-16H56a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCurrencyKztIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
