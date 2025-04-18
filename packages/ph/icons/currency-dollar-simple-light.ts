import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleLightIcon],svg[ph-currency-dollar-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 168a46.06 46.06 0 0 1-46 46h-18v18a6 6 0 0 1-12 0v-18h-18a46.06 46.06 0 0 1-46-46a6 6 0 0 1 12 0a34 34 0 0 0 34 34h48a34 34 0 0 0 0-68h-40a46 46 0 0 1 0-92h10V24a6 6 0 0 1 12 0v18h10a46.06 46.06 0 0 1 46 46a6 6 0 0 1-12 0a34 34 0 0 0-34-34h-32a34 34 0 0 0 0 68h40a46.06 46.06 0 0 1 46 46"></svg:path>`,
})
export class PhCurrencyDollarSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
