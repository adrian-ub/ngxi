import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarEuroLinearIcon],svg[solar-euro-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5m-5 3h5"></svg:path></svg:g>`,
})
export class SolarEuroLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
