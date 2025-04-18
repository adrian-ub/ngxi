import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignOutIcon],svg[si-glyph-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.995 4.917h1.992V0H1l8.026 2.666v12.251L1.321 13l-.215.829l8.89 2.153v-3.085l1.99.018V9.042h-1.99V4.917z"></svg:path><svg:path d="m15.904 7l-2.87-2.932v1.987H11v1.916h2.034v2.062zM7 8h.958v.916H7z"></svg:path></svg:g>`,
})
export class SiGlyphSignOutIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
