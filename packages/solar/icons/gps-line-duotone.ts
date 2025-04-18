import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarGpsLineDuotoneIcon],svg[solar-gps-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M2 12h2m16 0h2M12 4V2m0 20v-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGpsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
