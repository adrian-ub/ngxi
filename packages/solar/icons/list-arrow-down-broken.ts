import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownBrokenIcon],svg[solar-list-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6"></svg:path><svg:path d="M11 14H3m8 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
