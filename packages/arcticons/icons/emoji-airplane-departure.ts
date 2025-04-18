import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiAirplaneDepartureIcon],svg[arcticons-emoji-airplane-departure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.938 22.248l10.044-4.205a6.1 6.1 0 0 1 2.467-.435c2.188.067 6.145.392 4.766 1.9c-1.875 2.049-15.037 7.172-18.927 8.616s-8.7 2.206-12.028 2.27c-2.912.056.35-1.7.35-1.7s3.699-2.089 5.337-2.798l3.575-1.563"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.201 26.242L7.314 22.69l-1.814.63l5.757 5.579m19.423-6.235l-14.552-1.208l-1.238.879l9.91 3.516"></svg:path>`,
})
export class ArcticonsEmojiAirplaneDepartureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
