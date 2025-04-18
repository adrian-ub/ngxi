import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMusicIcon],svg[si-glyph-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.942.751L6.035.042v11.097a4.2 4.2 0 0 0-1.924.299c-1.594.651-2.422 2.217-1.965 3.312c.458 1.098 2.029 1.604 3.621.953c1.224-.5 2.073-1.451 2.184-2.362l-.008-9.817c2.627.798 4.52 1.673 4.52 4.284c0 .927 1.52 1.823 1.52-1.812c-.001-3.092-2.653-4.962-6.041-5.245"></svg:path>`,
})
export class SiGlyphMusicIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
