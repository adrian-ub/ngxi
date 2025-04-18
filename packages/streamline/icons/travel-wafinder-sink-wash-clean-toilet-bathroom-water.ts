import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWafinderSinkWashCleanToiletBathroomWaterIcon],svg[streamline-travel-wafinder-sink-wash-clean-toilet-bathroom-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5h13v2a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-2h0Zm7-6a2 2 0 0 0-4 0v6m4-4v1"></svg:path>`,
})
export class StreamlineTravelWafinderSinkWashCleanToiletBathroomWaterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
