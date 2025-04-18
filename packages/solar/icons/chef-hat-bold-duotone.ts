import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarChefHatBoldDuotoneIcon],svg[solar-chef-hat-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.999 18H5.002c.01 1.397.082 2.912.584 3.414C6.172 22 7.115 22 9 22h6c1.886 0 2.829 0 3.415-.586c.502-.502.573-2.017.584-3.414"></svg:path><svg:path fill="currentColor" d="M7 5a5 5 0 0 0-2 9.584V18h14v-3.416a5.001 5.001 0 0 0-2.737-9.53a4.502 4.502 0 0 0-8.526 0A5 5 0 0 0 7 5" opacity=".5"></svg:path>`,
})
export class SolarChefHatBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
