import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticBrokenIcon],svg[solar-list-cross-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 6h10.5M20 6h-2.25M11 16H3"></svg:path><svg:path stroke-linejoin="round" d="m15 16l5-5m0 5l-5-5"></svg:path><svg:path d="M11 11H7m-4 0h1.2"></svg:path></svg:g>`,
})
export class SolarListCrossMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
