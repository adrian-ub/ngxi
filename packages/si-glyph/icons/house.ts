import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHouseIcon],svg[si-glyph-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m16.794 8.77l-3.81-3.906V2.017l-.968.022v1.728L9.502 1.245a.71.71 0 0 0-1.003 0L1.206 8.771a.713.713 0 0 0 0 1.002a.71.71 0 0 0 1.003-.001L9 2.982l6.793 6.79a.704.704 0 0 0 1.001.001a.715.715 0 0 0 0-1.003"></svg:path><svg:path d="M4.043 9.532v5.69c0 .394.218.786.567.786h2.277l.064-3.993h4.074l-.002 3.993h2.303c.349 0 .632-.391.632-.786V9.531L9 4.625z"></svg:path></svg:g>`,
})
export class SiGlyphHouseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
