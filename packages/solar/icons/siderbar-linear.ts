import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSiderbarLinearIcon],svg[solar-siderbar-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path><svg:path stroke-linecap="round" d="M5.5 10h6m-5 4h4m4.5 7V3"></svg:path></svg:g>`,
})
export class SolarSiderbarLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
