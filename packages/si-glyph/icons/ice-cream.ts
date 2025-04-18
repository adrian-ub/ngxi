import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphIceCreamIcon],svg[si-glyph-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.513 16.906L12 8.042H7z"></svg:path><svg:path d="M11.775 2.732C11.459 1.725 10.617 1 9.617 1c-1.09 0-1.996.856-2.233 2.002c-.021 0-.041-.008-.063-.008c-1.27 0-2.298 1.159-2.298 2.589c0 1.261.694 2.308 1.754 2.538l5.529.124C13.248 7.87 14 6.63 14 5.44c0-1.432-.98-2.592-2.225-2.708"></svg:path></svg:g>`,
})
export class SiGlyphIceCreamIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
