import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTabletBrokenIcon],svg[solar-tablet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 4h-2C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828c.943.944 2.348 1.127 4.828 1.163M16 4.01c2.48.036 3.885.22 4.828 1.163C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-2m3-3H9"></svg:path>`,
})
export class SolarTabletBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
