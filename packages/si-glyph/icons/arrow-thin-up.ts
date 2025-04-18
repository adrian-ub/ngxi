import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinUpIcon],svg[si-glyph-arrow-thin-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.002.02l6.693 6.305c.459.459.297 1.16.094 1.359c-.402.402-.998.342-1.402-.061L9.949 3.728l-.002 11.314a.94.94 0 0 1-.951.928a.94.94 0 0 1-.951-.928L8.033 3.831L3.762 7.685a1.036 1.036 0 0 1-1.461 0c-.404-.4-.303-.949.102-1.352z"></svg:path>`,
})
export class SiGlyphArrowThinUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
