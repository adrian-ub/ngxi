import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapPointHospitalLinearIcon],svg[solar-map-point-hospital-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z"></svg:path><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:path stroke-linecap="round" d="M10.5 10h3M12 11.5v-3"></svg:path></svg:g>`,
})
export class SolarMapPointHospitalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
