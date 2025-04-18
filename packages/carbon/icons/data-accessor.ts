import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataAccessorIcon],svg[carbon-data-accessor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 13a2.96 2.96 0 0 0-1.285.3l-2.3-2.3l2.3-2.3A2.96 2.96 0 0 0 21 9a3 3 0 1 0-3-3a3 3 0 0 0 .3 1.285l-2.3 2.3l-2.3-2.3A3 3 0 0 0 14 6a3 3 0 1 0-3 3a2.96 2.96 0 0 0 1.285-.3l2.3 2.3l-2.3 2.3A2.96 2.96 0 0 0 11 13a3 3 0 1 0 3 3a3 3 0 0 0-.3-1.285l2.3-2.3l2.3 2.3A3 3 0 0 0 18 16a3 3 0 1 0 3-3m0-8a1 1 0 1 1-1 1a1 1 0 0 1 1-1M10 6a1 1 0 1 1 1 1a1 1 0 0 1-1-1m1 11a1 1 0 1 1 1-1a1 1 0 0 1-1 1m10 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonDataAccessorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
