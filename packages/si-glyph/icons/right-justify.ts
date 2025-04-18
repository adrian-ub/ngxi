import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphRightJustifyIcon],svg[si-glyph-right-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 1.938c0 .518-.42.938-.938.938H.98A.938.938 0 0 1 .98 1h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H.98A.938.938 0 0 1 .98 4h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H.98A.938.938 0 0 1 .98 7h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H.98A.938.938 0 0 1 .98 10h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H5.98a.938.938 0 0 1 0-1.876h9.082c.518 0 .938.42.938.938"></svg:path>`,
})
export class SiGlyphRightJustifyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
