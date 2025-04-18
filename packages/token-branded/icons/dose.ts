import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDoseIcon],svg[token-branded-dose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#131519" fill-rule="evenodd" d="M11.567 3H5.284a1.75 1.75 0 0 0-1.721 1.778V19.25A1.743 1.743 0 0 0 5.283 21h6.284c4.894 0 8.87-4.061 8.87-9c0-4.967-4.004-9-8.87-9m-.13 14.625a5.625 5.625 0 1 0 0-11.25a5.625 5.625 0 0 0 0 11.25" clip-rule="evenodd"></svg:path><svg:path fill="#FF7A15" d="M11.438 14.813c1.563 0 2.812-1.175 2.812-2.655c0-1.473-1.373-2.38-2.43-3.375a.545.545 0 0 0-.765 0c-1.058.996-2.43 1.868-2.43 3.375c0 1.48 1.277 2.655 2.813 2.655"></svg:path></svg:g>`,
})
export class TokenBrandedDoseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
