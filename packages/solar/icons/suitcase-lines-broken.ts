import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSuitcaseLinesBrokenIcon],svg[solar-suitcase-lines-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 6c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"></svg:path><svg:path stroke-linecap="round" d="M2.11 11H22m0 6h-3.5m-16 0h11M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6m4 16c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828S17.771 6 14 6"></svg:path></svg:g>`,
})
export class SolarSuitcaseLinesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
