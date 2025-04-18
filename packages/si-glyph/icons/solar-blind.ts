import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSolarBlindIcon],svg[si-glyph-solar-blind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(3)"><svg:path d="M11.502 12.02c-.25 0-.453-.161-.453-.36V1.041c0-.199.203-.36.453-.36s.454.161.454.36V11.66c0 .198-.204.36-.454.36"></svg:path><svg:ellipse cx="11.45" cy="13.017" rx="1.45" ry="2.017"></svg:ellipse><svg:path d="M.906 9.664c-.25.055-.867.025-.867-.092V.443c0-.158 1.015-.158 1.015 0L.913 9.572c0 .041.081.072-.007.092M7 9.52V.284c0-.157 1.024.008 1.024.165v9.236C8.024 9.842 7 9.677 7 9.52"></svg:path></svg:g><svg:path d="M0 0h16v1.969H0zm1 3h12v1.021H1zm0 2h12v1.02H1zm0 2v.954h12V7zm0 2h12v1.993H1z"></svg:path></svg:g>`,
})
export class SiGlyphSolarBlindIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
