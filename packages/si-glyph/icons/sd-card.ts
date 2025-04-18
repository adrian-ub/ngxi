import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSdCardIcon],svg[si-glyph-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5 9h5.906v4.938H5z"></svg:path><svg:path d="M12.969 5.938h.969V1.063H5L2.022 6.215v1.754h1.009v1.053H2.022v7.916h11.915V9.022h-.969zM10 1.969h1V4h-1zm-2 0h1V4H8zM6 2h1.031v2.031H6zm6 13.025H3.993V7.937H12zM13 4h-1V1.969h1z"></svg:path></svg:g>`,
})
export class SiGlyphSdCardIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
