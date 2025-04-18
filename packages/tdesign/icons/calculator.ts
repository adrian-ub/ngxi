import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculatorIcon],svg[tdesign-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v22H3zm2 2v4h14V3zm14 6H5v12h14zM7 12h4v2H7zm6 0h4v2h-4zm-6 4h4v2H7zm6 0h4v2h-4z"></svg:path>`,
})
export class TdesignCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
