import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTrafficLineDuotoneIcon],svg[solar-traffic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12A10 10 0 1 1 12 2" opacity=".5"></svg:path><svg:path d="M14.5 2.315c3.514.904 6.28 3.67 7.185 7.185"></svg:path></svg:g>`,
})
export class SolarTrafficLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
