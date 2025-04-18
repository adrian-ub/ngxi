import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphGame1Icon],svg[si-glyph-game-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.931 7.986l4.813-6.343A7.88 7.88 0 0 0 8.931-.001C4.551-.001 1 3.561 1 7.956c0 4.396 3.551 7.959 7.931 7.959c3.517 0 6.495-2.3 7.533-5.481zM7.499 5a1.5 1.5 0 1 1 .003-3.001A1.5 1.5 0 0 1 7.499 5"></svg:path>`,
})
export class SiGlyphGame1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
