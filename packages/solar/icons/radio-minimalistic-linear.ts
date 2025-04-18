import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticLinearIcon],svg[solar-radio-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:circle cx="8" cy="14" r="3"></svg:circle><svg:path stroke-linecap="round" d="M13.5 11H19m-5.5 3H19m-5.5 3H19M6.5 6L15 2"></svg:path></svg:g>`,
})
export class SolarRadioMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
