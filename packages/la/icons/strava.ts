import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStravaIcon],svg[la-strava-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.18 2L5.9 18h4.88l3.4-6.38L17.56 18h4.84zm8.22 16L20 22.79L17.56 18h-3.7L20 30l6.1-12z"></svg:path>`,
})
export class LaStravaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
