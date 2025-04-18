import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTicketTextLineIcon],svg[majesticons-ticket-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 19H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h13m0 14h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3m0 14v-1m0-13v1M7 12h6m-6 3h3"></svg:path>`,
})
export class MajesticonsTicketTextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
