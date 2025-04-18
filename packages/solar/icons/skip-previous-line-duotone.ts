import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousLineDuotoneIcon],svg[solar-skip-previous-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.34 9.353c-1.787 1.154-1.787 4.14 0 5.294l10.79 6.967c1.736 1.122 3.87-.338 3.87-2.647V5.033c0-2.31-2.134-3.769-3.87-2.648z"></svg:path><svg:path stroke-linecap="round" d="M2 5v14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSkipPreviousLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
