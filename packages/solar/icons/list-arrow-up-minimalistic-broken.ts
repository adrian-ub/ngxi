import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticBrokenIcon],svg[solar-list-arrow-up-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 11H3m9 5H3"></svg:path><svg:path stroke-linejoin="round" d="M15 11.5L17.5 9m0 0l2.5 2.5M17.5 9v8"></svg:path><svg:path d="M20 6H9.5M3 6h2.25"></svg:path></svg:g>`,
})
export class SolarListArrowUpMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
