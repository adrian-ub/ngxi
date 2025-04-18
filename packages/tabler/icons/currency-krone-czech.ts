import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyKroneCzechIcon],svg[tabler-currency-krone-czech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 6v12m0-6c3.5 0 6-3 6-6m-6 6c3.5 0 6 3 6 6m8-12l-2 2l-2-2m4 6h-2a3 3 0 0 0 0 6h2"></svg:path>`,
})
export class TablerCurrencyKroneCzechIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
