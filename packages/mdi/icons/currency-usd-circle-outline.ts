import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyUsdCircleOutlineIcon],svg[mdi-currency-usd-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m-1 13v-1H9v-2h4v-1h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1V7h2v1h2v2h-4v1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1h-2z" fill="currentColor"></svg:path>`,
})
export class MdiCurrencyUsdCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
