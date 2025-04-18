import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMetroIcon],svg[openmoji-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="29" fill="#3f3f3f"></svg:circle><svg:path fill="#d0cfce" d="M24.83 14h22.34a7.23 7.23 0 0 1 7.23 7.23V47.5a1.5 1.5 0 0 1-1.5 1.5H19.1a1.5 1.5 0 0 1-1.5-1.5V21.23A7.23 7.23 0 0 1 24.83 14"></svg:path><svg:path fill="#fcea2b" d="M42 39h9v5h-9zm-22 0h9v5h-9z"></svg:path><svg:path fill="none" stroke="#ea5a47" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M51 35H21"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M17 60.811L21 54m34 6.811L51 54"></svg:path><svg:path fill="#3f3f3f" d="M20 22h31v10H20z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M24.83 14h22.34a7.23 7.23 0 0 1 7.23 7.23V47.5a1.5 1.5 0 0 1-1.5 1.5H19.1a1.5 1.5 0 0 1-1.5-1.5V21.23A7.23 7.23 0 0 1 24.83 14"></svg:path><svg:path d="M51 23v8.8H21M21 44h8v-4m14 4h8v-4"></svg:path></svg:g>`,
})
export class OpenmojiMetroIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
