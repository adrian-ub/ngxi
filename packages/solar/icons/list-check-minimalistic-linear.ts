import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticLinearIcon],svg[solar-list-check-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m7 5H3m7 5H3"></svg:path><svg:path stroke-linejoin="round" d="m14 13.5l2.1 2.5l3.9-5"></svg:path></svg:g>`,
})
export class SolarListCheckMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
