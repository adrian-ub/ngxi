import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUpsideDownFaceIcon],svg[icon-park-upside-down-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 30L17 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 30L31 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 17C17 17 19 13 24 13C29 13 31 17 31 17"></svg:path></svg:g>`,
})
export class IconParkUpsideDownFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
