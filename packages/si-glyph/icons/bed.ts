import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBedIcon],svg[si-glyph-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 5)"><svg:path d="M15.031 2.016v1.015H1.938V.078H.009v5.893h1.929V4.938h13.093v1.033h.938V2.016z"></svg:path><svg:ellipse cx="3.985" cy=".97" rx=".985" ry=".97"></svg:ellipse><svg:path d="M13.991 1.998H6.013v-.866c0-.598.643-1.083 1.434-1.083h5.109c.793 0 1.435.485 1.435 1.083z"></svg:path></svg:g>`,
})
export class SiGlyphBedIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
