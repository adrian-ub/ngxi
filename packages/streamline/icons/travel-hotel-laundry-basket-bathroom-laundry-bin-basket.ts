import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelLaundryBasketBathroomLaundryBinBasketIcon],svg[streamline-travel-hotel-laundry-basket-bathroom-laundry-bin-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 1v9a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V1M.5 1h13m-12 3h3m-3 3h3m-3 3h3m5-6h3m-3 3h3m-3 3h3"></svg:path>`,
})
export class StreamlineTravelHotelLaundryBasketBathroomLaundryBinBasketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
