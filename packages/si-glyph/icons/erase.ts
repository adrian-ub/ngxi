import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphEraseIcon],svg[si-glyph-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.932 13.014L3.958 7.039L10.84.158c.322-.325.856-.314 1.191.022l4.762 4.759c.334.336.345.869.021 1.191zm-.969 1.096c-1.582 1.583-5.434.3-7.102-1.368c-1.666-1.667-.52-3.087 1.063-4.67z"></svg:path>`,
})
export class SiGlyphEraseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
