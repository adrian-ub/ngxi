import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMap3Icon],svg[si-glyph-map-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.035 13.581l4.962 1.294V3.415l-4.962-1.353zm-5.014 1.384l3.922-1.384V2.062L6.021 3.879zM.042 13.118l4.95 1.847V3.879L.042 2.031z"></svg:path>`,
})
export class SiGlyphMap3Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
