import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinRightIcon],svg[si-glyph-arrow-thin-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.992 7.98l-6.305 6.693c-.459.459-1.16.296-1.359.094c-.402-.403-.342-.998.061-1.402l3.895-4.438L1.97 8.925a.94.94 0 0 1-.927-.952a.937.937 0 0 1 .927-.95l11.212-.013l-3.855-4.271a1.036 1.036 0 0 1 0-1.461c.4-.405.95-.304 1.352.101z"></svg:path>`,
})
export class SiGlyphArrowThinRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
