import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCreditCardOffIcon],svg[tabler-credit-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1-.128.87m-2.002 2.002A3 3 0 0 1 18 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 2.124-2.87M3 11h8m4 0h6M7 15h.01M11 15h2"></svg:path>`,
})
export class TablerCreditCardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
