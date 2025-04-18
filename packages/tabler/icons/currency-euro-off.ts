import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyEuroOffIcon],svg[tabler-currency-euro-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.2 7c-1.977-2.26-4.954-2.602-7.234-1.04M8.053 8.039c-1.604 2.72-1.374 6.469.69 8.894c2.292 2.691 6 2.758 8.356.18M10 10H5m0 4h8M3 3l18 18"></svg:path>`,
})
export class TablerCurrencyEuroOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
