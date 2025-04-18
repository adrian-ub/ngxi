import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTicketIcon],svg[jam-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9H8a1 1 0 1 1 0-2h2V2.001a5 5 0 0 1-8 0V7h2a1 1 0 1 1 0 2H2v8.999a5 5 0 0 1 8 0zM0 20V0h3.17a3.001 3.001 0 0 0 5.66 0H12v20H8.83a3.001 3.001 0 0 0-5.66 0z"></svg:path>`,
})
export class JamTicketIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
