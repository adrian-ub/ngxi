import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickThinDownIcon],svg[si-glyph-arrow-thick-thin-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.336 8.667c.199 0 .404.045.596.141l6.07 3.034l6.069-3.034a1.332 1.332 0 1 1 1.192 2.385l-6.666 3.333a1.33 1.33 0 0 1-1.193 0l-6.666-3.333a1.332 1.332 0 0 1 .598-2.526"></svg:path><svg:path d="M2.336 4.334q.151-.001.297.07l6.369 3.184l6.367-3.184a.67.67 0 0 1 .895.298a.67.67 0 0 1-.299.895L9.299 8.93a.67.67 0 0 1-.596 0L2.037 5.597a.668.668 0 0 1 .299-1.263"></svg:path></svg:g>`,
})
export class SiGlyphArrowThickThinDownIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
