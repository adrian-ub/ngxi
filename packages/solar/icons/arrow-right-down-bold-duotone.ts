import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightDownBoldDuotoneIcon],svg[solar-arrow-right-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.47 8.47a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.53-1.28z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.47 6.53a.75.75 0 0 1 1.06-1.06l6.97 6.97l-1.06 1.06z" opacity=".5"></svg:path>`,
})
export class SolarArrowRightDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
