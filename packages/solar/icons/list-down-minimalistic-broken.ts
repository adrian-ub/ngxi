import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticBrokenIcon],svg[solar-list-down-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 16H3"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path><svg:path d="M20 11H3m0-5h10.5M20 6h-2.25"></svg:path></svg:g>`,
})
export class SolarListDownMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
