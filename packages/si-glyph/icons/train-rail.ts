import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrainRailIcon],svg[si-glyph-train-rail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.989 16h-.978l2-16h.978zm9 0h-.978l-2-16h.978z"></svg:path><svg:path d="M3 13h12v.916H3zm0-3h12v.916H3zm1-3h10v.916H4zm0-3h10v.916H4zm1-3h8v.916H5z"></svg:path></svg:g>`,
})
export class SiGlyphTrainRailIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
