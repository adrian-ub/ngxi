import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTramLinearIcon],svg[solar-tram-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16m-4.5 3H17M7 16h1.5M7 20l-1 2m11-2l1 2M10 2v.5a2 2 0 1 0 4 0V2"></svg:path></svg:g>`,
})
export class SolarTramLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
