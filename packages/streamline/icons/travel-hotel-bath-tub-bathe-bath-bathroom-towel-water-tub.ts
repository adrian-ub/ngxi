import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelBathTubBatheBathBathroomTowelWaterTubIcon],svg[streamline-travel-hotel-bath-tub-bathe-bath-bathroom-towel-water-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 4.5h-5a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4v-1a1 1 0 0 0-1-1h-2"></svg:path><svg:path d="M6.5 3.5h4v4h-4z"></svg:path></svg:g>`,
})
export class StreamlineTravelHotelBathTubBatheBathBathroomTowelWaterTubIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
