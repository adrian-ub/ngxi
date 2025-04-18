import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyKroneSwedishIcon],svg[tabler-currency-krone-swedish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 6v12m0-6c3.5 0 6-3 6-6m-6 6c3.5 0 6 3 6 6m4-8v8m4-8a4 4 0 0 0-4 4"></svg:path>`,
})
export class TablerCurrencyKroneSwedishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
