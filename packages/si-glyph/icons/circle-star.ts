import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleStarIcon],svg[si-glyph-circle-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 .062c-4.419 0-8 3.559-8 7.947c0 4.39 3.581 7.949 8 7.949c4.418 0 8-3.56 8-7.949S12.418.062 8 .062m3.108 11.963L8.021 9.902l-3.088 2.123L6.112 8.59L3.024 6.465h3.817l1.18-3.435l1.18 3.435h3.816L9.93 8.59z"></svg:path>`,
})
export class SiGlyphCircleStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
