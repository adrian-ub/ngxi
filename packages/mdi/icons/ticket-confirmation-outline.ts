import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTicketConfirmationOutlineIcon],svg[mdi-ticket-confirmation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 1 1 0 4v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46c0-1.5-.8-2.77-2-3.46V6h16zM11 15h2v2h-2m0-6h2v2h-2m0-6h2v2h-2Z"></svg:path>`,
})
export class MdiTicketConfirmationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
