import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPawnIcon],svg[si-glyph-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 16h12l-3-4V5l2-2V0h-1.938v1H9.937V0H8.062v1H5.937V0H4v3l2 2v7zm7-11h1v7h-1z"></svg:path>`,
})
export class SiGlyphPawnIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
