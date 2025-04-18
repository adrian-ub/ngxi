import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphStelescopeIcon],svg[si-glyph-stelescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m2.606 3.764l-2.2-2.2L1.8.17L4 2.372z"></svg:path><svg:path d="M1.082 3.647L4.33 6.896l2.477-2.477L3.559 1.17zm3.623 4.532l4.78 5.729l4.247-4.248l-5.729-4.78zm11.607 2.901l-5.15 5.15l-.81-.808l5.15-5.151z"></svg:path></svg:g>`,
})
export class SiGlyphStelescopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
