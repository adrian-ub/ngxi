import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAddBusinessIcon],svg[ic-round-add-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1m12 11h2v-3h.18c.63 0 1.1-.58.98-1.2l-1-5c-.09-.46-.5-.8-.98-.8H2.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H2v5c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-5h4zm-6 1H4v-4h5z"></svg:path><svg:path fill="currentColor" d="M22 18h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundAddBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
