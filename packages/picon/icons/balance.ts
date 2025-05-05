import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBalanceIcon],svg[picon-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4H6L5 3h3M4.5 7l2 1h-5l2-1L4 1M2 4H1L0 3h3"></svg:path>`,
})
export class PiconBalanceIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
