import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHospitalIcon],svg[si-glyph-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 1H3v3.084H2v9.874c0 .547.447.989 1 .989h5V12h3.042v3l4.875-.053c.552 0 1.083-.442 1.083-.989V4h-1zM7.031 12.97H4v-1h3.031zm0-3H4v-1h3.031zm0-3H4v-1h3.031zM6.959 4h-3V3h3zM11 5.007h-1v.977H9v-.977H8V3.98h1v-.997h1v.997h1zm.953-2.028h3v1.047h-3zM15 12.97h-3v-1h3zm0-3h-3v-1h3zm0-3h-3v-1h3z"></svg:path>`,
})
export class SiGlyphHospitalIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
