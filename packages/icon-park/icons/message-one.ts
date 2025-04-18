import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageOneIcon],svg[icon-park-message-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 6H44V36H29L24 41L19 36H4V6Z"></svg:path><svg:path stroke="#fff" d="M23 21H25.0025"></svg:path><svg:path stroke="#fff" d="M33.001 21H34.9999"></svg:path><svg:path stroke="#fff" d="M13.001 21H14.9999"></svg:path></svg:g>`,
})
export class IconParkMessageOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
