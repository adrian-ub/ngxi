import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAddCardIcon],svg[ic-round-add-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19c0-.55-.45-1-1-1H4v-6h18V6c0-1.1-.9-2-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h9c.55 0 1-.45 1-1m6-11H4V6h16zm0 14c-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundAddCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
