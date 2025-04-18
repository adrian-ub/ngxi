import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlanetLinearIcon],svg[solar-planet-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path d="M17.849 6.19c2.011-.37 3.49-.21 3.98.573c1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.533-.852.21-2.27 1.829-3.846"></svg:path></svg:g>`,
})
export class SolarPlanetLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
