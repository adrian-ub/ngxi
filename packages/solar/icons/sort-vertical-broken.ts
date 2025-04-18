import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalBrokenIcon],svg[solar-sort-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 18v-2m0-10l4 4.125M16 6l-4 4.125M16 6v7m-8 5l4-4.125M8 18l-4-4.125M8 18v-7m0-5v2"></svg:path>`,
})
export class SolarSortVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
