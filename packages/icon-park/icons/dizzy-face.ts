import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDizzyFaceIcon],svg[icon-park-dizzy-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 18L15 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 18L19 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 18L29 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 18L33 22"></svg:path><svg:rect width="8" height="8" x="20" y="28" fill="#43CCF8" stroke="#fff" stroke-linecap="round" rx="4"></svg:rect></svg:g>`,
})
export class IconParkDizzyFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
