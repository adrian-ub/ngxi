import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLeftwardsArrowToBarIcon],svg[si-glyph-leftwards-arrow-to-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.994 1c0-.553-.442-1-.989-1H3.026a.994.994 0 0 0-.99 1v14c0 .553.443 1 .99 1h1.979a.994.994 0 0 0 .989-1zm1.444 8.052a1.49 1.49 0 0 1 0-2.104L13.882.506c.581-.582 2.103-.839 2.103 1v12.988c0 1.901-1.521 1.582-2.103 1.001z"></svg:path>`,
})
export class SiGlyphLeftwardsArrowToBarIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
