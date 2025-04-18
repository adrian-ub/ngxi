import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCalculator2Icon],svg[si-glyph-calculator-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.58 0H4.322C3.592 0 3 .598 3 1.334v13.333C3 15.404 3.592 16 4.322 16h9.258c.729 0 1.42-.596 1.42-1.333V1.334C15 .598 14.31 0 13.58 0M7.021 14H4.987v-1h2.034zm0-5.979H4.987V7h2.034zM10 14H7.986v-1H10zm-2.979-3H4.987v-1h2.034zM10 11H7.986v-1H10zm0-3H7.986V7H10zm3 6h-2V9.979h2zm0-5.98h-2.014V7H13zM14.014 6H4V2h10.014z"></svg:path>`,
})
export class SiGlyphCalculator2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
