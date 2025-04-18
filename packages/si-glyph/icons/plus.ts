import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPlusIcon],svg[si-glyph-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 6h-4V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class SiGlyphPlusIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
