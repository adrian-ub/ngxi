import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTicketIcon],svg[icon-park-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M9.00013 16.0001L34 6.00008L38.0004 16.0001"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 16H44V22C41 22 38 24 38 27.5C38 31 41 34 44 34V40H4V34C7.00016 34 10 32 10 28C10 24 7 22 4 22V16Z"></svg:path><svg:path stroke="#fff" d="M17 25.3848H23"></svg:path><svg:path stroke="#fff" d="M17 31.3848H31"></svg:path></svg:g>`,
})
export class IconParkTicketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
