import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleBrokenIcon],svg[solar-link-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 12a6 6 0 1 1-6-6"></svg:path><svg:path d="M10 12a6 6 0 0 1 6-6m0 12a6 6 0 0 0 5-9.318"></svg:path></svg:g>`,
})
export class SolarLinkCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
