import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTicketIcon],svg[vaadin-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3H2c0 1.1-.9 2-2 2v6c1.1 0 2 .9 2 2h12c0-1.1.9-2 2-2V5c-1.1 0-2-.9-2-2m-1 9H3V4h10z"></svg:path><svg:path fill="currentColor" d="M4 5h8v6H4z"></svg:path>`,
})
export class VaadinTicketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
