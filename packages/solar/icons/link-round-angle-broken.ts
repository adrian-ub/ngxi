import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleBrokenIcon],svg[solar-link-round-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m12.792 15.8l1.43-1.432a6.076 6.076 0 0 0 0-8.59a6.067 6.067 0 0 0-8.583 0L2.778 8.643A6.076 6.076 0 0 0 6.732 19"></svg:path><svg:path d="M21.222 15.358A6.076 6.076 0 0 0 17.268 5m1.093 13.221a6.067 6.067 0 0 1-8.583 0a6.076 6.076 0 0 1 0-8.589l1.43-1.431"></svg:path></svg:g>`,
})
export class SolarLinkRoundAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
