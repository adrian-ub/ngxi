import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphStarCrossIcon],svg[si-glyph-star-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.601 6.4L8 0L6.398 6.4L0 8l6.398 1.601L8 16l1.601-6.399L16 8zM8 9.334a1.333 1.333 0 1 1 .003-2.667A1.333 1.333 0 0 1 8 9.334"></svg:path>`,
})
export class SiGlyphStarCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
