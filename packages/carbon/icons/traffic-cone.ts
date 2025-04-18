import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTrafficConeIcon],svg[carbon-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.796 28L18.975 2.775A1 1 0 0 0 18 2h-4a1 1 0 0 0-.975.775L7.205 28H4v2h24v-2Zm-4.822-12h-7.948l.923-4h6.102Zm.461 2l.923 4H10.642l.923-4Zm-5.64-14h2.41l1.384 6H13.41ZM10.18 24h11.64l.923 4H9.257Z"></svg:path>`,
})
export class CarbonTrafficConeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
