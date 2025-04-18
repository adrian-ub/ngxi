import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBook4Icon],svg[si-glyph-book-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 0v16H3.016v-2H4v-2h-.984V4H4V2h-.984V0zM2 2v2h1V2zm0 10v2h1v-2zm15-1.93h-1v2.843h1zm0-4.052h-1V9h1zm0-3.917h-1V4.96h1z"></svg:path>`,
})
export class SiGlyphBook4Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
