import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingBrokenIcon],svg[solar-bicycling-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227c-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127c-.465.042-.78.497-1.411 1.406M12 18l.057-.359c.235-1.47.352-2.204.024-2.804s-1.01-.898-2.374-1.493L8.23 12.7c-1.032-.45-1.549-.675-1.678-1.13c-.05-.18-.031-.36.05-.57"></svg:path></svg:g>`,
})
export class SolarBicyclingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
