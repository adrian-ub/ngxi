import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCdCreateExchangeIcon],svg[carbon-cd-create-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="14" r="2" fill="currentColor"></svg:circle><svg:path d="M14 2a12 12 0 0 0 0 24v-2a10 10 0 1 1 10-10a8.27 8.27 0 0 1 0 1h2c0-.33.05-.66.05-1A12 12 0 0 0 14 2z" fill="currentColor"></svg:path><svg:path d="M17 24h9.17l-2.59 2.59L25 28l5-5l-5-5l-1.42 1.42L26.17 22H17v2z" fill="currentColor"></svg:path><svg:path d="M14 20a6 6 0 1 1 6-6a6 6 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4z" fill="currentColor"></svg:path>`,
})
export class CarbonCdCreateExchangeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
