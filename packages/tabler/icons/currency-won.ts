import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyWonIcon],svg[tabler-currency-won-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 6l3.245 11.358a.85.85 0 0 0 1.624.035L12 8l3.131 9.393a.85.85 0 0 0 1.624-.035L20 6m1 4H3m18 4H3"></svg:path>`,
})
export class TablerCurrencyWonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
