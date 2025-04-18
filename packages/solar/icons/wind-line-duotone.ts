import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWindLineDuotoneIcon],svg[solar-wind-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 8h6.5A2.5 2.5 0 1 0 7 5.5v.357M4 14h14.5a3.5 3.5 0 1 1-3.5 3.5V17"></svg:path><svg:path d="M2 11h16.5A3.5 3.5 0 1 0 15 7.5V8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWindLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
