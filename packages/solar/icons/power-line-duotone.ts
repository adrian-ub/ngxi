import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPowerLineDuotoneIcon],svg[solar-power-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 2v4" opacity=".5"></svg:path><svg:path d="M8.5 3.706A9.003 9.003 0 0 0 12 21a9 9 0 0 0 3.5-17.294"></svg:path></svg:g>`,
})
export class SolarPowerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
