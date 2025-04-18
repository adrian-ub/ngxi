import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinLeftBottomIcon],svg[si-glyph-arrow-thin-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.124 15.922l-.017-8.721c0-.648.611-1.029.895-1.027c.57.001.948.464.949 1.034l.01 5.347L15.355.355a.94.94 0 0 1 1.327.018A.936.936 0 0 1 16.7 1.7L4.554 14.012l5.333.008c.57.002 1.033.465 1.033 1.033c.003.57-.457.887-1.027.885z"></svg:path>`,
})
export class SiGlyphArrowThinLeftBottomIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
