import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinusCircleLinearIcon],svg[solar-minus-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M15 12H9"></svg:path></svg:g>`,
})
export class SolarMinusCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
