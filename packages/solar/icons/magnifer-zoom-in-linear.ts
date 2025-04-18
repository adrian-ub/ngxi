import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomInLinearIcon],svg[solar-magnifer-zoom-in-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5"></svg:circle><svg:path stroke-linecap="round" d="M18.5 18.5L22 22M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9"></svg:path></svg:g>`,
})
export class SolarMagniferZoomInLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
