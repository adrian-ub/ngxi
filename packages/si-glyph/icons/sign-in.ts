import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignInIcon],svg[si-glyph-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.959 4.917V1H1.096L9 3.666v12.251L1.219 14l-.215.829L9.959 17v-3.085h2v-2.873l-2.865-3z"></svg:path><svg:path d="m11.1 8.102l2.87 2.931V8.968h2.046V6.98H13.97V5.068zM7 9h.958v.916H7z"></svg:path></svg:g>`,
})
export class SiGlyphSignInIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
