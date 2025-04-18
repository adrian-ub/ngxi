import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2LinearIcon],svg[solar-key-minimalistic-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="9" r="7"></svg:circle><svg:circle cx="15" cy="9" r="2"></svg:circle><svg:path stroke-linecap="round" d="m3.5 20.5l6-6M6 21l-1.5-1.5m2-2L8 19"></svg:path></svg:g>`,
})
export class SolarKeyMinimalistic2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
