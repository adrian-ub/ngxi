import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyThinIcon],svg[ph-currency-jpy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.1 50.53L136.44 132H176a4 4 0 0 1 0 8h-44v24h44a4 4 0 0 1 0 8h-44v44a4 4 0 0 1-8 0v-44H80a4 4 0 0 1 0-8h44v-24H80a4 4 0 0 1 0-8h39.56L52.9 50.53a4 4 0 0 1 6.2-5.06l68.9 84.21l68.9-84.21a4 4 0 1 1 6.2 5.06"></svg:path>`,
})
export class PhCurrencyJpyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
