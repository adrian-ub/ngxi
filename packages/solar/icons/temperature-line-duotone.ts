import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTemperatureLineDuotoneIcon],svg[solar-temperature-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22a5.5 5.5 0 0 0 3.439-9.793a1.11 1.11 0 0 1-.439-.86V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86A5.5 5.5 0 0 0 12 22Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 14a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm0 0V5"></svg:path></svg:g>`,
})
export class SolarTemperatureLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
