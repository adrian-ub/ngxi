import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarLightIcon],svg[ph-currency-dollar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 122h-18V54h10a34 34 0 0 1 34 34a6 6 0 0 0 12 0a46.06 46.06 0 0 0-46-46h-10V24a6 6 0 0 0-12 0v18h-10a46 46 0 0 0 0 92h10v68h-18a34 34 0 0 1-34-34a6 6 0 0 0-12 0a46.06 46.06 0 0 0 46 46h18v18a6 6 0 0 0 12 0v-18h18a46 46 0 0 0 0-92m-40 0a34 34 0 0 1 0-68h10v68Zm40 80h-18v-68h18a34 34 0 0 1 0 68"></svg:path>`,
})
export class PhCurrencyDollarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
