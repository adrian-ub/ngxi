import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTrafficOutlineIcon],svg[solar-traffic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.114 21.932A10.75 10.75 0 1 1 12 1.25a.75.75 0 0 1 0 1.5A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0a10.75 10.75 0 0 1-6.636 9.932"></svg:path><svg:path fill="currentColor" d="M14.687 1.589a.75.75 0 1 0-.374 1.452a9.27 9.27 0 0 1 6.646 6.646a.75.75 0 0 0 1.452-.374a10.77 10.77 0 0 0-7.724-7.724"></svg:path>`,
})
export class SolarTrafficOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
