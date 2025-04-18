import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTicket1Icon],svg[streamline-ticket-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.906 10.68a1 1 0 0 0 1 1h10.188a1 1 0 0 0 1-1V8.84a1.907 1.907 0 0 1 0-3.68V3.32a1 1 0 0 0-1-1H1.906a1 1 0 0 0-1 1v1.836a1.907 1.907 0 0 1 0 3.688zM9.11 2.328v1.64m0 2.212v1.64m0 2.22v1.64"></svg:path>`,
})
export class StreamlineTicket1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
