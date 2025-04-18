import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextLinearIcon],svg[solar-skip-next-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.66 9.353c1.787 1.154 1.787 4.14 0 5.294L5.87 21.614C4.135 22.737 2 21.277 2 18.968V5.033c0-2.31 2.134-3.769 3.87-2.648z"></svg:path><svg:path stroke-linecap="round" d="M22 5v14"></svg:path></svg:g>`,
})
export class SolarSkipNextLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
