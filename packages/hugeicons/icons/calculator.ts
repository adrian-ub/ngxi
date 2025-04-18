import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalculatorIcon],svg[hugeicons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 3v5M8 5.5H3M8 16l-2 2m0 0l-2 2m2-2l2 2m-2-2l-2-2M20 6h-4m4 12.5h-4m4-3h-4m6-3.5H2m10 10V2" color="currentColor"></svg:path>`,
})
export class HugeiconsCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
