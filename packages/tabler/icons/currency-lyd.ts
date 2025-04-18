import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyLydIcon],svg[tabler-currency-lyd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15h.01M21 5v10a2 2 0 0 1-2 2h-2.764a2 2 0 0 1-1.789-1.106L14 15M5 8l2.773 4.687c.427.697.234 1.626-.43 2.075A1.4 1.4 0 0 1 6.57 15H4.346a.93.93 0 0 1-.673-.293L3 14"></svg:path>`,
})
export class TablerCurrencyLydIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
