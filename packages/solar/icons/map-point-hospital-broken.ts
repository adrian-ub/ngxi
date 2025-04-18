import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapPointHospitalBrokenIcon],svg[solar-map-point-hospital-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:path stroke-linecap="round" d="M10.5 10h3M12 11.5v-3m-7 6.716c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"></svg:path></svg:g>`,
})
export class SolarMapPointHospitalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
