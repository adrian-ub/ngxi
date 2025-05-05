import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBankIcon],svg[picon-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h7v1H0m3-2V3h1v3m1 0V3h1v3M1 6V3h1v3M0 2l3-2h1l3 2"></svg:path>`,
})
export class PiconBankIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
