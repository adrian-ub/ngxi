import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWinkingFaceIcon],svg[icon-park-winking-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 20H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V22"></svg:path></svg:g>`,
})
export class IconParkWinkingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
