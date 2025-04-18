import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFlagIcon],svg[si-glyph-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0h1.994v15.913H1zm3.056.52v7.575S5.667 6.664 9.244 8c3.576 1.338 4.305.974 5.712.742c0 0-2.048-.871-3.222-4.029c0 0 2.987-2.755 3.222-4.274c0 0-3.7 1.212-5.751.241C7.152-.293 4.994-.089 4.056.52"></svg:path>`,
})
export class SiGlyphFlagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
