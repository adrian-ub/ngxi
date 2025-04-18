import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphShowerIcon],svg[si-glyph-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6.004 3.051C4.857 3.194 3 4.767 3 6.953h6.953c0-2.157-1.778-3.743-2.955-3.896c-.009-1.562.007-2.14 3.47-2.14c3.22 0 3.547 1.425 3.547 4.431v10.061c0 .275.208.499.484.499a.5.5 0 0 0 .5-.499V5.348C15 2.148 14.936 0 10.469 0C6.59 0 6.044.831 6.004 3.051M3 8h.959v.916H3z"></svg:path><svg:path d="M6 8h.959v.916H6zm3 0h.959v.916H9zm-5 2h.959v.916H4zm4 0h.959v.916H8z"></svg:path></svg:g>`,
})
export class SiGlyphShowerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
