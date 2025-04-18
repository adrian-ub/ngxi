import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareCheckedIcon],svg[si-glyph-square-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m3.017 7.904l1.871-1.873l2.285 2.291l6.092-6.101l1.78 1.783l-7.961 7.973z"></svg:path><svg:path d="M12.021 10.116v2.926H1.979V2.958h7.968l1.074-.933H1.002v11.936h11.977L13 9.083z"></svg:path></svg:g>`,
})
export class SiGlyphSquareCheckedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
