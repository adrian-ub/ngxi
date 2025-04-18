import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphAbacusIcon],svg[si-glyph-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 1)"><svg:path d="M14.194 13.958H1.765c-1.449 0-1.729-1.15-1.729-2.564V2.607C.036 1.193.315.043 1.765.043h12.429c1.448 0 1.728 1.15 1.728 2.564v8.787c0 1.414-.279 2.564-1.728 2.564M1.923 1A.937.937 0 0 0 1 1.948v10.104c0 .522.414.948.923.948h12.154a.937.937 0 0 0 .923-.948V1.948A.937.937 0 0 0 14.077 1z"></svg:path><svg:path d="M3 0h.948v13.068H3zm5 0h.948v13.068H8zm4 0h.948v13.068H12z"></svg:path><svg:ellipse cx="3.438" cy="4.976" rx="1.438" ry=".976"></svg:ellipse><svg:ellipse cx="3.438" cy="7.976" rx="1.438" ry=".976"></svg:ellipse><svg:ellipse cx="3.438" cy="10.976" rx="1.438" ry=".976"></svg:ellipse><svg:ellipse cx="8.477" cy="2.976" rx="1.477" ry=".976"></svg:ellipse><svg:ellipse cx="8.477" cy="5.976" rx="1.477" ry=".976"></svg:ellipse><svg:ellipse cx="8.477" cy="10.976" rx="1.477" ry=".976"></svg:ellipse><svg:ellipse cx="12.435" cy="7.977" rx="1.435" ry=".977"></svg:ellipse><svg:ellipse cx="12.435" cy="10.977" rx="1.435" ry=".977"></svg:ellipse></svg:g>`,
})
export class SiGlyphAbacusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
