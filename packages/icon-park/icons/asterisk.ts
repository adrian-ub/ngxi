import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAsteriskIcon],svg[icon-park-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" d="M15 24H33"></svg:path><svg:path stroke="#fff" d="M19.5 16.2056L28.5 31.794"></svg:path><svg:path stroke="#fff" d="M28.5 16.2056L19.5 31.794"></svg:path></svg:g>`,
})
export class IconParkAsteriskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
