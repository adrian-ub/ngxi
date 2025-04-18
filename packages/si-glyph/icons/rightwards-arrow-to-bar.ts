import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphRightwardsArrowToBarIcon],svg[si-glyph-rightwards-arrow-to-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.002 1c0-.553.442-1 .989-1h1.979c.547 0 .989.447.989 1v14c0 .553-.442 1-.989 1h-1.979a.994.994 0 0 1-.989-1zM3.113 15.495c-.582.581-2.103.9-2.103-1.001V1.506c0-1.839 1.521-1.582 2.103-1l6.444 6.442a1.49 1.49 0 0 1 0 2.104z"></svg:path>`,
})
export class SiGlyphRightwardsArrowToBarIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
