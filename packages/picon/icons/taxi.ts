import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTaxiIcon],svg[picon-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5L5 6h2V5M1 5v1h2L2 5m0-3L1 4h6L6 2M0 8V3l1-2h1.5L3 0h2l.5 1H7l1 2v5H6V7H2v1"></svg:path>`,
})
export class PiconTaxiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
