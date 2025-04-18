import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize4Icon],svg[si-glyph-arrow-resize-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.12 16.003L16 14.122l-3.038-3.057L15.018 9H9v6.047l2.087-2.097zM7 .969L4.913 3.065L1.88.013L0 1.894L3.038 4.95L1.042 6.917H7z"></svg:path>`,
})
export class SiGlyphArrowResize4Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
