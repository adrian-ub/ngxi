import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLayout3Icon],svg[si-glyph-layout-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17.021 16.979h-16V1h16zM2 16h14V2H2z"></svg:path><svg:path d="M3 10v4.953h4.977V10zm7 0v4.992h5.002V10zM3 3v4.96h5.01V3zm7 0v4.963h5V3z"></svg:path></svg:g>`,
})
export class SiGlyphLayout3Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
