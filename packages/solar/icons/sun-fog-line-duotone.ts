import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSunFogLineDuotoneIcon],svg[solar-sun-fog-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 22h8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 19h14" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 16h20"></svg:path><svg:path d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.392.393M5.322 5.322l-.393-.393" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSunFogLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
