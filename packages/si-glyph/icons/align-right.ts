import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphAlignRightIcon],svg[si-glyph-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 1.938c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 1h14.082c.518 0 .938.42.938.938m0 12c0 .518-.42.938-.938.938H1.98a.938.938 0 0 1 0-1.876h14.082c.518 0 .938.42.938.938m0-6c0 .518-.42.938-.938.938H5.98A.938.938 0 0 1 5.98 7h10.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H7.98a.938.938 0 0 1 0-1.876h8.082c.518 0 .938.42.938.938m0-6c0 .518-.42.938-.938.938H9.98A.938.938 0 0 1 9.98 4h6.082c.518 0 .938.42.938.938"></svg:path>`,
})
export class SiGlyphAlignRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
