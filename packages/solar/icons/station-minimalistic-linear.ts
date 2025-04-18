import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStationMinimalisticLinearIcon],svg[solar-station-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"></svg:path><svg:path stroke-linecap="round" d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913m-8.035-1.963A4.24 4.24 0 0 1 7.8 9.055c0-2.338 1.88-4.233 4.2-4.233s4.2 1.895 4.2 4.233c0 1.13-.44 2.158-1.157 2.917"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m16 22l-4-12l-4 12"></svg:path><svg:path stroke-linecap="round" d="M14.5 17.5h-5"></svg:path></svg:g>`,
})
export class SolarStationMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
