import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCurrencyPoundCircleIcon],svg[humbleicons-currency-pound-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 8.5l-.11-.164A3 3 0 0 0 12.395 7H12a3 3 0 0 0-3 3v3.757a3 3 0 0 1-.879 2.122L8 16h7m-7.5-4H12m9 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class HumbleiconsCurrencyPoundCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
