import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageUnreadIcon],svg[icon-park-message-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 16V36H29L24 41L19 36H4V6H34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M23 20H25.0025"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M33.001 20H34.9999"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M13.001 20H14.9999"></svg:path><svg:circle cx="43" cy="7" r="3" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkMessageUnreadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
