import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousBoldDuotoneIcon],svg[solar-skip-previous-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648z"></svg:path>`,
})
export class SolarSkipPreviousBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
