import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSocketIcon],svg[si-glyph-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.969 12.979a4.97 4.97 0 0 1-4.967-4.968A4.975 4.975 0 0 1 8.969 3.04a4.977 4.977 0 0 1 4.969 4.971c0 2.74-2.23 4.968-4.969 4.968m.039-9.076c-2.247 0-4.075 1.846-4.075 4.114s1.828 4.113 4.075 4.113c2.244 0 4.074-1.846 4.074-4.113s-1.83-4.114-4.074-4.114"></svg:path><svg:path d="M16.916 15.918H1V0h15.916zm-14.947-.887h14.062V.937H1.969z"></svg:path><svg:path d="M7 7h.969v1.812H7zm3 0h.969v1.812H10z"></svg:path></svg:g>`,
})
export class SiGlyphSocketIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
