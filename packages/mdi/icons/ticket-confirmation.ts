import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTicketConfirmationIcon],svg[mdi-ticket-confirmation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8.5h-2v-2h2zm0 4.5h-2v-2h2zm0 4.5h-2v-2h2zm9-7.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2a2 2 0 0 1-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiTicketConfirmationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
