import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTicketSolidIcon],svg[mynaui-ticket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v3a.75.75 0 0 1-.75.75a1.25 1.25 0 1 0 0 2.5a.75.75 0 0 1 .75.75v3A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17v-3a.75.75 0 0 1 .75-.75a1.25 1.25 0 1 0 0-2.5a.75.75 0 0 1-.75-.75zm10.5 1a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm0 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm0 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiTicketSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
