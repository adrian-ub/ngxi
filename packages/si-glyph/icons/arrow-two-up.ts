import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowTwoUpIcon],svg[si-glyph-arrow-two-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.973 5.175l5.002 3.744v-3.94L8.973 1.036L4.004 5.078v3.918l.012.011zm0 7.783l5.002 3.951v-3.938L8.973 9.005l-4.969 4.064v3.918l.012.01z"></svg:path>`,
})
export class SiGlyphArrowTwoUpIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
