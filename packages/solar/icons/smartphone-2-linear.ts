import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2LinearIcon],svg[solar-smartphone-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M15 5H9"></svg:path><svg:circle cx="12" cy="19" r="1"></svg:circle><svg:path d="M4 17h16M4 7h16"></svg:path></svg:g>`,
})
export class SolarSmartphone2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
