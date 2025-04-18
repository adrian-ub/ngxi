import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLeftJustifyIcon],svg[si-glyph-left-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 2.938c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 2h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 5h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 8h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H1.98a.938.938 0 0 1 0-1.876h14.082c.518 0 .938.42.938.938m-5 3c0 .518-.42.938-.938.938H1.98a.938.938 0 0 1 0-1.876h9.082c.518 0 .938.42.938.938"></svg:path>`,
})
export class SiGlyphLeftJustifyIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
