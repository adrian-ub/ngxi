import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyRupeeNepaleseIcon],svg[tabler-currency-rupee-nepalese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H4h3a4 4 0 1 1 0 8H4l6 6m11-2l-4.586-4.414a2 2 0 0 0-2.828 2.828l.707.707"></svg:path>`,
})
export class TablerCurrencyRupeeNepaleseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
