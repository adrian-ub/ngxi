import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelPlacesColumn2PillarBuildingHistoricalColumnIcon],svg[streamline-travel-places-column-2-pillar-building-historical-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2.75" cy="2.75" r="2.25"></svg:circle><svg:circle cx="11.25" cy="2.75" r="2.25"></svg:circle><svg:path d="M3 .5h8m-6.84 4h5.68M3 13.5V4.99m2.5 8.51v-6m3 6v-6m2.5 6V4.99"></svg:path></svg:g>`,
})
export class StreamlineTravelPlacesColumn2PillarBuildingHistoricalColumnIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
