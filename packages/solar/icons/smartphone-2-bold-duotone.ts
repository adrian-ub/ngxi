import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2BoldDuotoneIcon],svg[solar-smartphone-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22s5.657 0 6.828-1.172S20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2S6.343 2 5.172 3.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class SolarSmartphone2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
