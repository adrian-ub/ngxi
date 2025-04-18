import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBowTieIcon],svg[si-glyph-bow-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.953 10.974c1.234 0 5.01-1.313 5.01-2.613v-.705c0-1.354-4.383-2.655-5.01-2.655C-.278 5-.26 10.974.953 10.974m14.103-.047c-1.237 0-5.022-1.303-5.022-2.593v-.699C10.034 6.29 14.429 5 15.056 5c1.235 0 1.215 5.927 0 5.927M7 7h1.984v1.984H7z"></svg:path>`,
})
export class SiGlyphBowTieIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
