import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCurrencyEuroCircleIcon],svg[humbleicons-currency-euro-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12a4 4 0 0 0 6.4 3.2M8 12a4 4 0 0 1 6.4-3.2M8 12h3m-3 0H7m14 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class HumbleiconsCurrencyEuroCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
