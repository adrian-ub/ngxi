import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTicketswapIcon],svg[arcticons-ticketswap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.12 33.11a12.88 12.88 0 0 1-18.21 0h0L4.47 22.71L9 18.14a2.77 2.77 0 0 1 3.9 0l8.5 8.46a3.67 3.67 0 0 0 6.2-1.6l6.78 6.77a14 14 0 0 1-1.26 1.34M39 29.86a2.77 2.77 0 0 1-3.9 0l-8.49-8.46a3.67 3.67 0 0 0-6.2 1.65l-6.78-6.76a15 15 0 0 1 1.2-1.4a12.88 12.88 0 0 1 18.21 0h0l10.41 10.4Z"></svg:path>`,
})
export class ArcticonsTicketswapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
