import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTurntableBrokenIcon],svg[solar-turntable-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m15 17l.894-.447A2 2 0 0 0 17 14.763V10.5"></svg:path><svg:rect width="8" height="8" x="6" y="8" rx="4"></svg:rect><svg:path d="M15.5 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarTurntableBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
