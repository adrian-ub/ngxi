import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphGolfFlagIcon],svg[si-glyph-golf-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:ellipse cx="5.433" cy="14.98" rx="5.433" ry=".98"></svg:ellipse><svg:path d="M5 0h.956v12.959H5zm2.031.103s1.644-.42 4.45 1.461s2.249 3.512 4.103 3.646c.998-.066-.42 1.168-1.854.604c-2.781-1.093-3.6-2.637-6.699-1.21z"></svg:path><svg:circle cx="13.945" cy="13.945" r="1.945"></svg:circle></svg:g>`,
})
export class SiGlyphGolfFlagIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
