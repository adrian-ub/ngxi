import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphIpodIcon],svg[si-glyph-ipod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(4)"><svg:ellipse cx="4.469" cy="11.488" rx="1.469" ry="1.488"></svg:ellipse><svg:path d="M8.301.021H.779C.371.021.04.326.04.7v14.595c0 .375.33.679.739.679h7.522c.41 0 .739-.304.739-.679V.7c0-.374-.33-.679-.739-.679M4.5 14a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M8 6H1V1h7z"></svg:path></svg:g>`,
})
export class SiGlyphIpodIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
