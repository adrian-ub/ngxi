import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTrafficBrokenIcon],svg[solar-traffic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.5 2.315c3.514.904 6.28 3.67 7.185 7.185M22 12a10 10 0 0 1-18 6m-1.808-4.05A10 10 0 0 1 12 2"></svg:path>`,
})
export class SolarTrafficBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
