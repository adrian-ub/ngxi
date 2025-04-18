import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMaxBrokenIcon],svg[solar-spedometer-max-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M10.121 14.364a3 3 0 1 1 4.243-4.243c.446.446.757 1.371.971 2.346c.321 1.459.482 2.188-.099 2.77c-.58.58-1.31.42-2.769.098c-.975-.214-1.9-.525-2.346-.971Z"></svg:path><svg:path stroke-linecap="round" d="M9 21.542C4.943 20.268 2 16.478 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542"></svg:path></svg:g>`,
})
export class SolarSpedometerMaxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
