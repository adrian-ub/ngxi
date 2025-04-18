import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2BrokenIcon],svg[solar-key-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21.064 12.5A7 7 0 1 0 18 15.326"></svg:path><svg:circle cx="15" cy="9" r="2"></svg:circle><svg:path stroke-linecap="round" d="m3.5 20.5l6-6M6 21l-1.5-1.5m2-2L8 19"></svg:path></svg:g>`,
})
export class SolarKeyMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
