import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEcologySciencePlanetSolarSystemRingPlanetSaturnSpaceAstronomyIcon],svg[streamline-ecology-science-planet-solar-system-ring-planet-saturn-space-astronomy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.63 8.13C.85 10.49.05 12.53.76 13.24c1 1 4.6-1 8-4.44s5.44-7 4.44-8c-.64-.65-2.38 0-4.47 1.41"></svg:path><svg:path d="M12.05 4.92A5 5 0 0 1 7.5 12a5.06 5.06 0 0 1-1.95-.39M3.5 10a5 5 0 0 1 7-7"></svg:path></svg:g>`,
})
export class StreamlineEcologySciencePlanetSolarSystemRingPlanetSaturnSpaceAstronomyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
