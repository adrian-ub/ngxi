import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyDollarOffIcon],svg[tabler-currency-dollar-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.7 8A3 3 0 0 0 14 6h-4M7.443 7.431A3 3 0 0 0 10 12h2m4.564 4.558A3 3 0 0 1 14 18h-4a3 3 0 0 1-2.7-2M12 3v3m0 12v3M3 3l18 18"></svg:path>`,
})
export class TablerCurrencyDollarOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
