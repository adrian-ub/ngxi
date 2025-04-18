import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphViewIcon],svg[si-glyph-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 4)"><svg:path d="M8 0C3.598 0 .031 2.66.031 3.969S3.597 7.938 8 7.938c4.4 0 7.969-2.618 7.969-3.969S12.4 0 8 0m-.01 7.062C4.342 7.062 2.869 5.011 2.869 4S4.342.938 7.99.938c3.646 0 5.119 2.02 5.119 3.062S11.637 7.062 7.99 7.062"></svg:path><svg:ellipse cx="7.932" cy="3.963" rx="1.932" ry="1.963"></svg:ellipse></svg:g>`,
})
export class SiGlyphViewIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
