import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCloseOneIcon],svg[icon-park-close-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29.6567 18.3432L18.343 29.6569"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.3433 18.3432L29.657 29.6569"></svg:path></svg:g>`,
})
export class IconParkCloseOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
