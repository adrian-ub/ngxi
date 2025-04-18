import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundLinearIcon],svg[solar-bicycling-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="14" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-3.918c-.377 0-.742-.128-1.037-.363L11.386 7.92A2.638 2.638 0 1 0 8.69 12.4l3.09 1.349a1.89 1.89 0 0 1 .982 2.477L12 18"></svg:path></svg:g>`,
})
export class SolarBicyclingRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
