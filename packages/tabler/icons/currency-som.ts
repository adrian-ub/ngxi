import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencySomIcon],svg[tabler-currency-som-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18V6H5v10a2 2 0 0 1-2 2M14 6v12h4a3 3 0 0 0 0-6h-4h4a3 3 0 0 0 0-6z"></svg:path>`,
})
export class TablerCurrencySomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
