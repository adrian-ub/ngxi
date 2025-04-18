import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyDirhamIcon],svg[tabler-currency-dirham-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 19H5m3.599-2.521A1.5 1.5 0 1 0 7.5 19M7 4v9m8 0h1.888a1.5 1.5 0 0 0 1.296-2.256L16 7m-5 6.01V13"></svg:path>`,
})
export class TablerCurrencyDirhamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
