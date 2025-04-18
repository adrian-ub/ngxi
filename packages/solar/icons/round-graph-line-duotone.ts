import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundGraphLineDuotoneIcon],svg[solar-round-graph-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.97 9.97 0 0 1 3-7.141" opacity=".4"></svg:path><svg:path d="M5 12a7 7 0 1 0 7-7" opacity=".7"></svg:path><svg:path d="M12 16a4 4 0 0 0 0-8"></svg:path></svg:g>`,
})
export class SolarRoundGraphLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
