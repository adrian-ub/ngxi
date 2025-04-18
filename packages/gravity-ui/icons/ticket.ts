import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiTicketIcon],svg[gravity-ui-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiTicket0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.091 2.318a.986.986 0 0 1 .106 1.485L11 4a.707.707 0 0 0 1 1l.197-.197a1 1 0 0 1 .288-.2a.986.986 0 0 1 1.197.306l1.243 1.658c.575.766.36 1.862-.461 2.355a16.16 16.16 0 0 0-5.542 5.542a1.616 1.616 0 0 1-2.355.461l-1.658-1.243a.986.986 0 0 1-.106-1.485L5 12a.707.707 0 0 0-1-1l-.197.197a1 1 0 0 1-.288.2a.986.986 0 0 1-1.197-.306L1.075 9.433a1.616 1.616 0 0 1 .461-2.355a16.16 16.16 0 0 0 5.542-5.542a1.616 1.616 0 0 1 2.355-.461zm-2.558-.043l1.201.9a2.208 2.208 0 0 0 3.09 3.09l.901 1.202a.116.116 0 0 1-.033.169a17.66 17.66 0 0 0-6.056 6.056a.116.116 0 0 1-.17.033l-1.2-.9a2.208 2.208 0 0 0-3.09-3.09l-.901-1.202a.116.116 0 0 1 .033-.168a17.66 17.66 0 0 0 6.057-6.057a.116.116 0 0 1 .168-.033M7.53 6.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiTicket0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiTicketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
