import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStockTrainerIcon],svg[arcticons-stock-trainer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.39 5.007l18.753 30.176M25.904 4.598L9.725 36.26M6.244 17.154l20.498 25.764m15.014-15.453l-5.877 10.18M32.68 8.51L14.924 39.263M24 3.5l17.756 10.25v20.5L24.001 44.5L6.245 34.25v-20.5z"></svg:path>`,
})
export class ArcticonsStockTrainerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
