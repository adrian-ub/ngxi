import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBulletListIcon],svg[si-glyph-bullet-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.016 9h-3V6h3zM.953 8h1V6.969h-1zm2.016 4.986H.016V10h2.953zM.954 12h1v-1h-1zm2.062-7h-3V2h3zM.953 4h1V2.969h-1zM5 7h10.977v.96H5zm0-4h10.977v.96H5zm0 8h10.977v.914H5z"></svg:path>`,
})
export class SiGlyphBulletListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
