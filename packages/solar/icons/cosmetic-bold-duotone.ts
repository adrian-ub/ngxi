import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCosmeticBoldDuotoneIcon],svg[solar-cosmetic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3 11h4V6a1 1 0 0 0-1.447-.895l-2 1A1 1 0 0 0 3 7zm8-.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"></svg:path><svg:path fill="currentColor" d="M15.75 15.95v3.55H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-3.55a5.5 5.5 0 0 1-1.5 0" opacity=".5"></svg:path>`,
})
export class SolarCosmeticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
