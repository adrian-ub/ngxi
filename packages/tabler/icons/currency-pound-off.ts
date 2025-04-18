import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyPoundOffIcon],svg[tabler-currency-pound-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 18.5a6 6 0 0 1-5 0a6 6 0 0 0-5 .5a3 3 0 0 0 2-2.5V9m1.192-2.825A4 4 0 0 1 16.45 7M13 13H7M3 3l18 18"></svg:path>`,
})
export class TablerCurrencyPoundOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
