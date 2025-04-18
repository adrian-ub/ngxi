import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalculatorDuotoneIcon],svg[iconamoon-calculator-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M5 9h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 9h14"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 3h14v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 13h1m4 0h1m-6 4h1m4 0h1"></svg:path></svg:g>`,
})
export class IconamoonCalculatorDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
