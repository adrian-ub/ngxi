import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTicketsTwoIcon],svg[icon-park-solid-tickets-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTicketsTwo0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 30c3 0 5 1.88 5 4h6V4h-6c0 2-2 4-5 4s-5-2-5-4h-6v14"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 44h-6c0-2.12-2-4-5-4s-5 1.88-5 4H8V14h6c0 2 2 4 5 4s5-2 5-4h6z"></svg:path><svg:circle cx="14" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="19" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="24" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTicketsTwo0)"></svg:path>`,
})
export class IconParkSolidTicketsTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
