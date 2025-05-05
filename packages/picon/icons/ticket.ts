import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTicketIcon],svg[picon-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h1V4H3m0 2v1h1V6M3 2v1h1V2m4 1l-1 .5v1L8 5v2H0V5l1-.5v-1L0 3V1h8"></svg:path>`,
})
export class PiconTicketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
