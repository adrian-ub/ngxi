import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTicketFIcon],svg[jam-ticket-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9v11H8.83a3.001 3.001 0 0 0-5.66 0H0V9h4a1 1 0 1 0 0-2H0V0h3.17a3.001 3.001 0 0 0 5.66 0H12v7H8a1 1 0 1 0 0 2z"></svg:path>`,
})
export class JamTicketFIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
