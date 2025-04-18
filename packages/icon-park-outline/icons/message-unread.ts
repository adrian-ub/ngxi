import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMessageUnreadIcon],svg[icon-park-outline-message-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 16v20H29l-5 5l-5-5H4V6h30"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M23 20h2.003m7.998 0H35m-21.999 0H15"></svg:path><svg:circle cx="43" cy="7" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineMessageUnreadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
