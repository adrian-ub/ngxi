import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFlowerPotIcon],svg[si-glyph-flower-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.25 5.965H.663L0 3.083h15.914zm-2.475 8.971H3.139L1.055 7.022h13.804z"></svg:path>`,
})
export class SiGlyphFlowerPotIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
