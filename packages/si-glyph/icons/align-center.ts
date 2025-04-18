import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphAlignCenterIcon],svg[si-glyph-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 1.938c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 1h14.082c.518 0 .938.42.938.938m0 12c0 .518-.42.938-.938.938H1.98a.938.938 0 0 1 0-1.876h14.082c.518 0 .938.42.938.938m0-6c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 7h14.082c.518 0 .938.42.938.938m-3 3c0 .518-.42.938-.938.938H4.98a.938.938 0 0 1 0-1.876h8.082c.518 0 .938.42.938.938m0-6c0 .518-.42.938-.938.938H4.98A.938.938 0 0 1 4.98 4h8.082c.518 0 .938.42.938.938"></svg:path>`,
})
export class SiGlyphAlignCenterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
