import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchBrokenIcon],svg[solar-card-search-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v1M10 4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3m-3-4H6"></svg:path><svg:circle cx="18" cy="17" r="3"></svg:circle><svg:path stroke-linecap="round" d="m20.5 19.5l1 1M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardSearchBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
