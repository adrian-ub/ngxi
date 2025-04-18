import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelShowerHeadBatheBathBathroomShowerWaterHeadIcon],svg[streamline-travel-hotel-shower-head-bathe-bath-bathroom-shower-water-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 6.5a4 4 0 0 1 8 0Zm2 3v1m-1.5 2v1m3.5-1v1m3.5-1v1M9 9.5v1m-2-8v-2"></svg:path>`,
})
export class StreamlineTravelHotelShowerHeadBatheBathBathroomShowerWaterHeadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
