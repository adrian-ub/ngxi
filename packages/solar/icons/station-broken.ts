import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStationBrokenIcon],svg[solar-station-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 9.078a9.97 9.97 0 0 1-2.922 7.064m.063-14.064c.826.843 1.504 1.83 1.992 2.922M5 16.22a9.97 9.97 0 0 1-3-7.142A9.97 9.97 0 0 1 4.936 2M6 9.06c0-1.555.673-2.963 1.762-3.982m8.523.044C17.345 6.137 18 7.527 18 9.06c0 1.552-.67 2.957-1.753 3.974m-8.447.044A5.7 5.7 0 0 1 6.883 12"></svg:path><svg:circle cx="12" cy="9.078" r="2"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.5 11L16 22l-5.5-6.5m1-4.5L8 22l5.5-6.5"></svg:path></svg:g>`,
})
export class SolarStationBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
