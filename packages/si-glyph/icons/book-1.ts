import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBook1Icon],svg[si-glyph-book-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.007C4.691 1.444 2.11 2.32 0 3.61v10.325c2.105-1.298 5.248-2.364 8-.946v-9.98zm0 9.995c3.629-1.463 5.919-.353 8 .937V3.621c-2.081-1.285-4.118-2.438-8-.845z"></svg:path>`,
})
export class SiGlyphBook1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
