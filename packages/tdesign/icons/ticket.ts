import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTicketIcon],svg[tdesign-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h22v5.469l-.57.271a2.5 2.5 0 0 0 0 4.52l.57.271V20H1v-5.469l.57-.271a2.5 2.5 0 0 0 0-4.52L1 9.47zm2 2v2.258c1.205.806 2 2.18 2 3.742a4.5 4.5 0 0 1-2 3.742V18h18v-2.258A4.5 4.5 0 0 1 19 12c0-1.561.795-2.936 2-3.742V6zm5 3h8v2H8zm0 4h8v2H8z"></svg:path>`,
})
export class TdesignTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
