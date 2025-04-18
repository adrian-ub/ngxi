import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowDownBrokenIcon],svg[solar-map-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.597 14l-3.125 7.007c-.59 1.324-2.354 1.324-2.944 0L3.164 4.497c-.667-1.495.814-3.047 2.202-2.306l5.904 3.152c.459.245 1 .245 1.458 0l5.904-3.152c1.388-.74 2.87.81 2.202 2.306L18.716 9.25"></svg:path>`,
})
export class SolarMapArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
