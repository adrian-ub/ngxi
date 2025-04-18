import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelTowelTowelSpaWetWaterHotIcon],svg[streamline-travel-hotel-towel-towel-spa-wet-water-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 10a3 3 0 0 0-3-3h-9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h9a3 3 0 0 0 3-3Zm-13 0h9m-6-3a3 3 0 0 1 0-6h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1.86m2.86-3h-9"></svg:path>`,
})
export class StreamlineTravelHotelTowelTowelSpaWetWaterHotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
