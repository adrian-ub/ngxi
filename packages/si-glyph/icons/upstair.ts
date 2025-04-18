import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphUpstairIcon],svg[si-glyph-upstair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.969 1.047h-2.896v2h-2.011v2h-2.01v2H8.043v2H6.031v2h-2.01v2H1v2.918h2.896L17 3.965zm-9.096.057H2.949l2.155 1.414l-3.182 3.18l1.326 1.326l3.181-3.181l1.448 2.205z"></svg:path>`,
})
export class SiGlyphUpstairIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
