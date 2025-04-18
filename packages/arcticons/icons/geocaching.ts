import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeocachingIcon],svg[arcticons-geocaching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5v-37M5.5 24h37M29.614 35.218c3.676-4.073 5.526-.582 8.807-6.05c-4.374.925-6.813-2.187-10.262.379L31.48 42.5M14.1 14.1a13.987 13.987 0 0 0-.999 18.677m19.677-19.675A13.93 13.93 0 0 0 24 10m-8.778 24.899A13.93 13.93 0 0 0 24 38m14-14a13.93 13.93 0 0 0-3.101-8.777"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.611 20.336c0-5.425-9.83-7.654-9.83-12.364"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.1 14.1c.204-.174.296-.324.596-.592c2.368-2.118 4.915-3.18 4.915-5.536"></svg:path><svg:circle cx="14.696" cy="9.234" r="1.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsGeocachingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
