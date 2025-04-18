import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleAnalyticsIcon],svg[arcticons-google-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.5 42.5a5 5 0 0 0 5-5v-27a5 5 0 0 0-5-5h0a5 5 0 0 0-5 5v27a5 5 0 0 0 5 5m-13.5 0a5 5 0 0 0 5-5v-16a5 5 0 0 0-5-5h0a5 5 0 0 0-5 5v16a5 5 0 0 0 5 5"></svg:path><svg:circle cx="10.5" cy="37.5" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGoogleAnalyticsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
