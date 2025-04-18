import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMedalStarIcon],svg[si-glyph-medal-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m8.007 5.996l1.071 3.02h3.54L9.74 11.318l1.094 3.489l-2.865-2.157l-2.864 2.157l1.094-3.489l-2.85-2.302h3.54z"></svg:path><svg:path d="m8.007 1.947l2.276 6.039H11.5l.469-6.619S12.151.041 10.768.041H5.252c-1.361 0-1.235 1.305-1.235 1.305l.488 6.641h1.229z"></svg:path></svg:g>`,
})
export class SiGlyphMedalStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
