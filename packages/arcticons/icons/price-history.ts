import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPriceHistoryIcon],svg[arcticons-price-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.2 20.4v2.8m29.6-1.6v2.9m-8.5-.9v7.3m-4.2-4.8v9.1m-4.2-12.6v8.5m-4.2-10.7v7m-4.3-10.3v6.8m21.2-2.3v6"></svg:path><svg:circle cx="26.1" cy="35.2" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4z"></svg:path>`,
})
export class ArcticonsPriceHistoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
