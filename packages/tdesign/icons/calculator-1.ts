import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculator1Icon],svg[tdesign-calculator-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v20H4zm2 2v4h12V4zm12 6h-3v2h3zm0 4h-3v2h3zm0 4h-3v2h3zm-5 2v-2h-2v2zm-4 0v-2H6v2zm-3-4h3v-2H6zm0-4h3v-2H6zm5-2v2h2v-2zm2 4h-2v2h2z"></svg:path>`,
})
export class TdesignCalculator1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
