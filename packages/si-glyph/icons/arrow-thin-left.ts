import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinLeftIcon],svg[si-glyph-arrow-thin-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.042 8.01l6.305-6.693c.459-.459 1.16-.296 1.359-.094c.402.403.342.998-.061 1.402L4.749 7.063l11.315.002a.94.94 0 0 1 .927.952a.937.937 0 0 1-.927.95L4.852 8.98l3.854 4.271a1.036 1.036 0 0 1 0 1.461c-.4.405-.95.304-1.352-.101z"></svg:path>`,
})
export class SiGlyphArrowThinLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
