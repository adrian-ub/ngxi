import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapEarth2PlanetEarthGlobeWorldIcon],svg[streamline-travel-map-earth-2-planet-earth-globe-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M12.48 3.5h-4a2 2 0 0 0 0 4a1 1 0 0 1 1 1V13M.58 8H3a2 2 0 0 1 2 2v3.19"></svg:path></svg:g>`,
})
export class StreamlineTravelMapEarth2PlanetEarthGlobeWorldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
