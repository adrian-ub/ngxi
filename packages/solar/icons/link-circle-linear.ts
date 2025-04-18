import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleLinearIcon],svg[solar-link-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 12a6 6 0 1 1-6-6"></svg:path><svg:path d="M10 12a6 6 0 1 1 6 6"></svg:path></svg:g>`,
})
export class SolarLinkCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
