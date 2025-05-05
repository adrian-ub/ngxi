import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCashierIcon],svg[picon-cashier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3L4 5L3 3H1V0h6v3M2 1v1h4V1M0 8l1-4h6l1 4M1 6.5V7h6v-.5"></svg:path>`,
})
export class PiconCashierIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
