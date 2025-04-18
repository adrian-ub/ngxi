import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorArrowTrendingLines24Icon],svg[fluent-color-arrow-trending-lines-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorArrowTrendingLines240)" d="M5 18v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0m5-4a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm4 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m6-4a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"></svg:path><svg:path fill="url(#fluentColorArrowTrendingLines241)" d="M17 4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414 0L10 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L13.5 9.086L18.586 4z"></svg:path><svg:defs><svg:lineargradient id="fluentColorArrowTrendingLines240" x1="21.109" x2=".978" y1="9.308" y2="20.334" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorArrowTrendingLines241" x1="3.668" x2="22.349" y1="14" y2="1.536" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#22918B"></svg:stop><svg:stop offset="1" stop-color="#20AC9D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorArrowTrendingLines24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
