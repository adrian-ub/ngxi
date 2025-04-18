import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphInColumnsIcon],svg[si-glyph-in-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h4v12.998H1zm5 0h4v12.973H6zm5 0h4v13.019h-4z"></svg:path>`,
})
export class SiGlyphInColumnsIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
