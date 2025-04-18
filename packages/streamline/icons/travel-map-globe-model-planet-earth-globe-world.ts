import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapGlobeModelPlanetEarthGlobeWorldIcon],svg[streamline-travel-map-globe-model-planet-earth-globe-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.16" cy="5.75" r="3"></svg:circle><svg:path d="M6.16 11v2.5m-1.5 0h3M6.16.5a5.25 5.25 0 1 1-3.57 9.1"></svg:path></svg:g>`,
})
export class StreamlineTravelMapGlobeModelPlanetEarthGlobeWorldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
