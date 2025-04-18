import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalBrokenIcon],svg[solar-sort-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 8l4.125-4M6 8l4.125 4M6 8h7m5 0h-2m2 8l-4.125-4M18 16l-4.125 4M18 16h-7m-5 0h2"></svg:path>`,
})
export class SolarSortHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
