import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsCalculatorIcon],svg[akar-icons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5H2z"></svg:path><svg:path d="M18.5 16.5h-3"></svg:path><svg:path stroke-linejoin="round" d="M12 11h10v7a4 4 0 0 1-4 4h-6zm0 0H2v7a4 4 0 0 0 4 4h6z"></svg:path><svg:path d="M5.5 18L7 16.5m0 0L8.5 15M7 16.5L8.5 18M7 16.5L5.5 15"></svg:path></svg:g>`,
})
export class AkarIconsCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
