import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTwoArrowDownIcon],svg[si-glyph-two-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.002 11.854L3.008 8.109v3.94l4.994 3.943l4.965-4.042V8.032l-.012-.011zm0-7.784L3.008.119v3.939l4.994 3.965l4.965-4.064V.041l-.012-.01z"></svg:path>`,
})
export class SiGlyphTwoArrowDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
