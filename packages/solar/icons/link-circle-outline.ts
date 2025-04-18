import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleOutlineIcon],svg[solar-link-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 12C2.75 9.1 5.1 6.75 8 6.75a.75.75 0 0 0 0-1.5A6.75 6.75 0 1 0 14.75 12a.75.75 0 0 0-1.5 0a5.25 5.25 0 1 1-10.5 0"></svg:path><svg:path fill="currentColor" d="M21.25 12c0 2.9-2.35 5.25-5.25 5.25a.75.75 0 0 0 0 1.5A6.75 6.75 0 1 0 9.25 12a.75.75 0 0 0 1.5 0a5.25 5.25 0 1 1 10.5 0"></svg:path>`,
})
export class SolarLinkCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
