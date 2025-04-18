import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarShareBrokenIcon],svg[solar-share-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 12a2.5 2.5 0 1 0 2.5-2.5m7.5-3L9 10m5 7.5L9 14m7.5 7a2.5 2.5 0 1 0-2.5-2.5m4.665-11.75a2.5 2.5 0 1 1-.915-3.415"></svg:path>`,
})
export class SolarShareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
