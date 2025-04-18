import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDisplayBrokenIcon],svg[solar-display-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.879c-.3.3-.498.662-.628 1.121M2 9v1c0 2.828 0 4.243.879 5.121C3.757 16 5.172 16 8 16h8c2.828 0 4.243 0 5.121-.879c.3-.3.498-.662.628-1.121M12 19v-2.5m0 2.5l6 2m-6-2l-6 2"></svg:path>`,
})
export class SolarDisplayBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
