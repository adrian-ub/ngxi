import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftUpBoldDuotoneIcon],svg[solar-arrow-left-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.53 15.53A.75.75 0 0 1 5.25 15V6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 .53 1.28z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.53 17.47a.75.75 0 1 1-1.06 1.06l-6.97-6.97l1.06-1.06z" opacity=".5"></svg:path>`,
})
export class SolarArrowLeftUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
