import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPenIcon],svg[si-glyph-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.224-.387l1.869 1.868l-3.035 3.035l-1.87-1.869zM11.252 3.48l1.876 1.876l-7.115 7.115l-1.876-1.876zM1.021 15.957l2.143-4.109l1.877 1.877zm10.534-5.996l-.468-.477l2.965-2.919l-.393-.434l.496-.448l.822.91z"></svg:path>`,
})
export class SiGlyphPenIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
