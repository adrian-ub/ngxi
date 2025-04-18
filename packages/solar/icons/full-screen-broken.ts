import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenBrokenIcon],svg[solar-full-screen-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172A3 3 0 0 0 2.585 4M2 10c0-.735 0-1.4.009-2M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10m-8 12c3.771 0 5.657 0 6.828-1.172a3 3 0 0 0 .587-.828M22 14c0 .736 0 1.4-.009 2"></svg:path>`,
})
export class SolarFullScreenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
