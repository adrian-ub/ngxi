import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticBoldDuotoneIcon],svg[solar-radio-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 14a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m8.5-3a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.38 2.647a.75.75 0 1 0-.76-1.293l-7.99 4.7C7.474 6.003 8.477 6 9.679 6z"></svg:path>`,
})
export class SolarRadioMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
