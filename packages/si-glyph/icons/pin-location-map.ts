import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationMapIcon],svg[si-glyph-pin-location-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m0 11.438l3.938 1.468V1.062L0-.015zm11.506-3.433c-1.361 0-2.463 1.204-2.463 2.69c0 .384.076.747.207 1.079l2.264 4.152l2.245-4.152c.134-.332.208-.695.208-1.079c0-1.486-1.103-2.69-2.461-2.69m.016 4.041a1.5 1.5 0 1 1-.002-3a1.5 1.5 0 0 1 .002 3"></svg:path><svg:path d="M16 .969L11.031.041v6.854c.156-.02.312-.046.475-.046c1.977 0 3.578 1.541 3.578 3.443c0 .492-.108.956-.301 1.382l-.385.629L16 13zm-8.074 9.323c0-1.37.838-2.544 2.043-3.098V.166l-4.938.896v11.844l3.681-.449l-.485-.783a3.3 3.3 0 0 1-.301-1.382"></svg:path></svg:g>`,
})
export class SiGlyphPinLocationMapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
