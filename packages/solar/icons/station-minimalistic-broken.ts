import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStationMinimalisticBrokenIcon],svg[solar-station-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 4.822c-2.32 0-4.2 1.895-4.2 4.233c0 1.147.453 2.187 1.188 2.95M12 2c3.866 0 7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913M7.008 14A7.06 7.06 0 0 1 5 9.055a7.06 7.06 0 0 1 2.008-4.946m8.035 7.863A4.24 4.24 0 0 0 16.2 9.055c0-.746-.191-1.447-.527-2.055"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m16 22l-4-12l-4 12"></svg:path><svg:path stroke-linecap="round" d="M14.5 17.5h-5"></svg:path></svg:g>`,
})
export class SolarStationMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
