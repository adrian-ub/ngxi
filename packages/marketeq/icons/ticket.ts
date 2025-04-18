import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTicketIcon],svg[marketeq-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 27.083v-4.166m0-12.5v4.166zm0 25v4.166z"></svg:path><svg:path stroke="#306CFE" d="M37.5 25a6.25 6.25 0 0 0 6.25 6.25v6.25a2.083 2.083 0 0 1-2.083 2.083H8.333A2.083 2.083 0 0 1 6.25 37.5v-6.25a6.25 6.25 0 0 0 0-12.5V12.5a2.083 2.083 0 0 1 2.083-2.083h33.334A2.083 2.083 0 0 1 43.75 12.5v6.25A6.25 6.25 0 0 0 37.5 25"></svg:path></svg:g>`,
})
export class MarketeqTicketIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
