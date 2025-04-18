import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnBoldIcon],svg[ph-currency-ngn-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 116h-12V46a12 12 0 0 0-24 0v70h-46.14l-60.4-77.38A12 12 0 0 0 52 46v70H40a12 12 0 0 0 0 24h12v70a12 12 0 0 0 24 0v-70h46.14l60.4 77.38A12 12 0 0 0 204 210v-70h12a12 12 0 0 0 0-24m-140 0V80.88L103.41 116Zm104 59.12L152.59 140H180Z"></svg:path>`,
})
export class PhCurrencyNgnBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
