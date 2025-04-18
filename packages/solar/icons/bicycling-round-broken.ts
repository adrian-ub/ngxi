import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundBrokenIcon],svg[solar-bicycling-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="14" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92a2.638 2.638 0 1 0-2.698 4.48M12 18l.76-1.774a1.89 1.89 0 0 0-.981-2.477"></svg:path></svg:g>`,
})
export class SolarBicyclingRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
