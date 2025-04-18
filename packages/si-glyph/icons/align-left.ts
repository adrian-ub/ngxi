import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphAlignLeftIcon],svg[si-glyph-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.043 1.938c0 .518.42.938.938.938h14.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0 12c0 .518.42.938.938.938h14.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0-6c0 .518.42.938.938.938h10.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0 3c0 .518.42.938.938.938h8.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0-6c0 .518.42.938.938.938h6.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938"></svg:path>`,
})
export class SiGlyphAlignLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
