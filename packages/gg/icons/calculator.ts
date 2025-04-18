import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCalculatorIcon],svg[gg-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 5H7v2h10zM7 9h2v2H7zm2 4H7v2h2zm-2 4h2v2H7zm6-8h-2v2h2zm-2 4h2v2h-2zm2 4h-2v2h2zm2-8h2v2h-2zm2 4h-2v6h2z"></svg:path><svg:path fill-rule="evenodd" d="M3 3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0h14v18H5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
