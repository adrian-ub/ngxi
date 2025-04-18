import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyOffIcon],svg[tabler-currency-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.531 14.524a7 7 0 0 0-9.06-9.053M7.049 7.053a7 7 0 0 0 9.903 9.896M4 4l3 3m13-3l-3 3M4 20l3-3m13 3l-3-3M3 3l18 18"></svg:path>`,
})
export class TablerCurrencyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
