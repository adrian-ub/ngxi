import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownLineDuotoneIcon],svg[solar-list-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6"></svg:path><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
