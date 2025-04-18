import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalLinearIcon],svg[solar-sort-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 8H6m0 0l4.125-4M6 8l4.125 4M6 16h12m0 0l-4.125-4M18 16l-4.125 4"></svg:path>`,
})
export class SolarSortHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
