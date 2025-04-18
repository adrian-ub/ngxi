import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerLowLinearIcon],svg[solar-spedometer-low-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M13.778 14.364a3 3 0 1 0-4.242-4.243c-.446.446-.757 1.371-.972 2.346c-.32 1.459-.481 2.188.1 2.77c.58.58 1.31.42 2.768.098c.976-.214 1.9-.525 2.346-.971Z"></svg:path></svg:g>`,
})
export class SolarSpedometerLowLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
