import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAirplaneTicketIcon],svg[ic-round-airplane-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2m-2.46 9.3l-8.49 2.26a.5.5 0 0 1-.56-.23l-1.12-1.95c-.18-.3-.01-.69.32-.78c.16-.04.34-.01.47.1l1.05.82l2.39-.64L9.9 9.6a.788.788 0 0 1 .47-1.15a.8.8 0 0 1 .74.18l3.69 3.44l2.44-.65a.967.967 0 0 1 1.18.68a.994.994 0 0 1-.69 1.2"></svg:path>`,
})
export class IcRoundAirplaneTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
