import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphStoveIcon],svg[si-glyph-stove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0v3h14.958V0zm2 2H2V1h1zm2 0H4V1h1zM1 16h14.958V4.042H1zM5 6h7v1H5zM4 7.958h9v6H4z"></svg:path>`,
})
export class SiGlyphStoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
