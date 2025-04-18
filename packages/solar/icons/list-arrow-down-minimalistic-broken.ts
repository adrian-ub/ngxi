import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticBrokenIcon],svg[solar-list-arrow-down-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 16H3m9-5H3"></svg:path><svg:path stroke-linejoin="round" d="m15 14.5l2.5 2.5m0 0l2.5-2.5M17.5 17V9"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25"></svg:path></svg:g>`,
})
export class SolarListArrowDownMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
