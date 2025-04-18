import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomOutBrokenIcon],svg[solar-minimalistic-magnifer-zoom-out-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 11.5h5m6 8.5l2 2M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomOutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
