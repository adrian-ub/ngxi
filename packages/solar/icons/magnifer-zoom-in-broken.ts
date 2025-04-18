import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomInBrokenIcon],svg[solar-magnifer-zoom-in-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 18.5L22 22M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"></svg:path>`,
})
export class SolarMagniferZoomInBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
