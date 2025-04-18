import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWindBrokenIcon],svg[solar-wind-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 8h2m2-2.143V5.5A2.5 2.5 0 1 1 9.5 8H8m-4 6h1m10 3v.5a3.5 3.5 0 1 0 3.5-3.5H9m-7-3h6m7-3v-.5a3.5 3.5 0 1 1 3.5 3.5h-6.25"></svg:path>`,
})
export class SolarWindBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
