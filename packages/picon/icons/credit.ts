import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCreditIcon],svg[picon-credit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v6H0m0-4h8V2H0m1 4h2V5H1"></svg:path>`,
})
export class PiconCreditIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
