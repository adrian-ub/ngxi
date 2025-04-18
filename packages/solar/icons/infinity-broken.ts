import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarInfinityBrokenIcon],svg[solar-infinity-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 8a5 5 0 0 0-6 8m10 0a5 5 0 0 0 6-8M7 17c2.761 0 3.5-2 5-5s2.239-5 5-5"></svg:path>`,
})
export class SolarInfinityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
