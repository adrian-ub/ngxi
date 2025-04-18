import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubLightIcon],svg[ph-currency-rub-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 150a58 58 0 0 0 0-116H88a6 6 0 0 0-6 6v98H56a6 6 0 0 0 0 12h26v20H56a6 6 0 0 0 0 12h26v34a6 6 0 0 0 12 0v-34h50a6 6 0 0 0 0-12H94v-20ZM94 46h54a46 46 0 0 1 0 92H94Z"></svg:path>`,
})
export class PhCurrencyRubLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
