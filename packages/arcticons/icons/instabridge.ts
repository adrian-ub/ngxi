import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstabridgeIcon],svg[arcticons-instabridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.592 26.396a9.98 9.98 0 0 0-8.92 1.948v.035m6.348 4.085a4 4 0 1 0 4 4h0a4 4 0 0 0-4-4m7.279-14.087a19.62 19.62 0 0 0-19.761 3.086M42.5 14.204c-10.731-8.89-26.268-8.89-37 0m23.6 11.401h7.778c.295 0 .534.24.534.534v5.749a.534.534 0 0 1-.534.534H29.1a.534.534 0 0 1-.534-.534v-5.749c0-.295.239-.534.534-.534"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.062 25.605v-2.46a2.925 2.925 0 0 1 5.85 0"></svg:path><svg:circle cx="32.987" cy="29.014" r="1.134" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInstabridgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
