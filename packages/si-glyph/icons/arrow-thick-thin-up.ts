import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickThinUpIcon],svg[si-glyph-arrow-thick-thin-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.666 8.333c-.201 0-.404-.045-.596-.141L9.002 5.158L2.931 8.192a1.332 1.332 0 1 1-1.192-2.385l6.666-3.333a1.33 1.33 0 0 1 1.193 0l6.666 3.333a1.332 1.332 0 0 1-.598 2.526"></svg:path><svg:path d="M15.666 12.666a.66.66 0 0 1-.297-.07L9.002 9.412l-6.369 3.184a.667.667 0 1 1-.596-1.193L8.703 8.07a.67.67 0 0 1 .596 0l6.666 3.333a.668.668 0 0 1-.299 1.263"></svg:path></svg:g>`,
})
export class SiGlyphArrowThickThinUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
