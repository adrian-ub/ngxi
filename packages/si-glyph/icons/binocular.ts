import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBinocularIcon],svg[si-glyph-binocular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M0 14h6v.916H0zm10 0h6v.916h-6zM2.041 3.012L.666 12.917h4.667l-.687-3.905h1.323v-6h-.985V1.979h.981v-.95H2.006v.95H3v1.033zm8.959 0h-.969v6h1.344l-.709 3.905h4.667l-1.375-9.905h-.974V1.979h.981v-.95h-3.959v.95H11z"></svg:path><svg:path d="M8.984 2.016H7.016V3H5.969v1.969h1.066v3.062H5.969v1.94h4.062v-1.94H8.994V4.969h1.037V3H8.984z"></svg:path></svg:g>`,
})
export class SiGlyphBinocularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
