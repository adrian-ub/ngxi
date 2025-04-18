import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTicketOneIcon],svg[icon-park-ticket-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 8H11C11 8 12 13 17 13C22 13 23 8 23 8H44V40H23C23 40 22 35 17 35C12 35 11 40 11 40H4V8Z"></svg:path><svg:path stroke="#fff" d="M17 19V21"></svg:path><svg:path stroke="#fff" d="M17 27L17 29"></svg:path><svg:path stroke="#fff" d="M25 21H36"></svg:path><svg:path stroke="#fff" d="M25 27H36"></svg:path></svg:g>`,
})
export class IconParkTicketOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
