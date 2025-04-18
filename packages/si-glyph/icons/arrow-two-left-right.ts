import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowTwoLeftRightIcon],svg[si-glyph-arrow-two-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.688 7.716a.84.84 0 0 0 1.17 0V5.992h9.641c.828 0 1.5-.66 1.5-1.472s-.672-1.472-1.5-1.472H4.858V1.249a.84.84 0 0 0-1.17 0l-2.48 2.708a.8.8 0 0 0 0 1.146zm12.07 3.114l-2.573-2.538a.834.834 0 0 0-1.171 0v1.731H2.583c-.828 0-1.5.664-1.5 1.481s.672 1.481 1.5 1.481h9.431v1.732a.84.84 0 0 0 1.171 0l2.573-2.538c.322-.318.322-1.031 0-1.349"></svg:path>`,
})
export class SiGlyphArrowTwoLeftRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
