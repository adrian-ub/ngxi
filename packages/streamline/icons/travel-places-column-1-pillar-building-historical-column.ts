import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelPlacesColumn1PillarBuildingHistoricalColumnIcon],svg[streamline-travel-places-column-1-pillar-building-historical-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 13.25v-7.5m2.5 7.5v-5.5m3 5.5v-5.5m2.5 5.5v-7.5m0-5H3a2.5 2.5 0 1 0 2.29 3.5h3.42A2.5 2.5 0 1 0 11 .75Z"></svg:path>`,
})
export class StreamlineTravelPlacesColumn1PillarBuildingHistoricalColumnIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
