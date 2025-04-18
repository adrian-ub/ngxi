import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListLineDuotoneIcon],svg[solar-list-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 7H4"></svg:path><svg:path d="M15 12H4" opacity=".7"></svg:path><svg:path d="M9 17H4" opacity=".4"></svg:path></svg:g>`,
})
export class SolarListLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
