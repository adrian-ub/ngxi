import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlemonitorIcon],svg[arcticons-blemonitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.45" cy="24.9" r="1.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.45 19.27a5.59 5.59 0 0 1 5.63 5.63m-5.63-10.62c5.845.049 10.571 4.775 10.62 10.62"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.45 9.08c8.693.017 15.727 7.077 15.71 15.77v.05M17.5 30v8.2h4.1m2 0h4.1M23.6 30h4.1m-4.1 4.1h2.7M23.6 30v8.2m6.2 0V30l4.1 8.2L38 30v8.2m-24.6-4.1a2 2 0 1 1 0 4H10v-8.2h3.4a2 2 0 0 1 2 2h0a2.19 2.19 0 0 1-2 2.2m0 0H10"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsBlemonitorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
