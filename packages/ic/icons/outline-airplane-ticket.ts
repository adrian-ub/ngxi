import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineAirplaneTicketIcon],svg[ic-outline-airplane-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2M20 18H4v-2.54c1.19-.69 2-1.99 2-3.46c0-1.48-.8-2.77-1.99-3.46L4 6h16zM8.87 15.66l-1.66-2.88l.93-.25l1.26.99l2.39-.64l-2.4-4.16l1.4-.38l4.01 3.74l2.44-.65a.967.967 0 0 1 1.18.68a.99.99 0 0 1-.69 1.19z"></svg:path>`,
})
export class IcOutlineAirplaneTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
