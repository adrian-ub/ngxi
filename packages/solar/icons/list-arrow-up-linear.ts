import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpLinearIcon],svg[solar-list-arrow-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3"></svg:path><svg:path stroke-linejoin="round" d="M20 16.5L17.5 14m0 0L15 16.5m2.5-2.5v6"></svg:path></svg:g>`,
})
export class SolarListArrowUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
