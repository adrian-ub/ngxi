import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalculatorplusplusIcon],svg[arcticons-calculatorplusplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5A21.5 21.5 0 1 1 39.2 8.8L32 16.05a11.25 11.25 0 1 0 0 15.91h0l7.2 7.24A21.46 21.46 0 0 1 24 45.5m5.19-25.87v8m-4-4h7.99m3.86 0h8m-4-4v8"></svg:path>`,
})
export class ArcticonsCalculatorplusplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
