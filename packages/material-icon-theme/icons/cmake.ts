import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCmakeIcon],svg[material-icon-theme-cmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M11.94 2.984L2.928 21.017l9.875-8.47z"></svg:path><svg:path fill="#e53935" d="m11.958 2.982l.002.29l1.312 14.499l-.002.006l.023.26l7.363 2.978h.415l-.158-.31l-.114-.228h-.001l-8.84-17.494z"></svg:path><svg:path fill="#7cb342" d="m8.558 16.13l-5.627 4.884h17.743v-.016z"></svg:path>`,
})
export class MaterialIconThemeCmakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
