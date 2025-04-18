import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTicket1Icon],svg[lineicons-ticket-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 6a.75.75 0 0 0-.75.75v2.278a3.066 3.066 0 0 1 0 5.945v2.277c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75v-2.277a3.066 3.066 0 0 1 0-5.945V6.75a.75.75 0 0 0-.75-.75zM2 6.75A2.25 2.25 0 0 1 4.25 4.5h15.5A2.25 2.25 0 0 1 22 6.75v2.936a.75.75 0 0 1-.75.75a1.565 1.565 0 0 0 0 3.13a.75.75 0 0 1 .75.75v2.934a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.25v-2.934a.75.75 0 0 1 .75-.75a1.565 1.565 0 0 0 0-3.13a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTicket1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
