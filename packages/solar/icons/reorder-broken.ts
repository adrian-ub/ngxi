import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarReorderBrokenIcon],svg[solar-reorder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 10h-8m-6 0h2m-2 8h8m6 0h-2m2-4H5m14-8H5"></svg:path>`,
})
export class SolarReorderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
