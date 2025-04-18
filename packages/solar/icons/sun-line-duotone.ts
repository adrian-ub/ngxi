import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSunLineDuotoneIcon],svg[solar-sun-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:path stroke-linecap="round" d="M12 2v1m0 18v1m10-10h-1M3 12H2"></svg:path><svg:path stroke-linecap="round" d="m19.07 4.93l-.392.393M5.322 18.678l-.393.393m14.141-.001l-.392-.393M5.322 5.322l-.393-.393" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSunLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
