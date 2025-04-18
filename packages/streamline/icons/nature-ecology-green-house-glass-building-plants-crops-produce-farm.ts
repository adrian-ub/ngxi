import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyGreenHouseGlassBuildingPlantsCropsProduceFarmIcon],svg[streamline-nature-ecology-green-house-glass-building-plants-crops-produce-farm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.94a1 1 0 0 0-.32-.74L7 .5L.82 6.2a1 1 0 0 0-.32.74v5.56a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1ZM7 8V.5M.5 8h13m-13 2.75H4m6 0h3.5M4 13.5V3.27m6 10.23V3.27"></svg:path>`,
})
export class StreamlineNatureEcologyGreenHouseGlassBuildingPlantsCropsProduceFarmIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
