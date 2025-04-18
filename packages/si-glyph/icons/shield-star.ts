import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphShieldStarIcon],svg[si-glyph-shield-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0C4.688 0 2 1.958 2 1.958l.005 6.098C2.005 13.091 8.002 16 8.002 16S14 13.259 14 8.041V1.958S11.314 0 8 0m1.607 7.875l.955 2.939l-2.5-1.816l-2.502 1.816l.955-2.939l-2.5-1.816h3.091l.956-2.94l.955 2.94h3.091z"></svg:path>`,
})
export class SiGlyphShieldStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
