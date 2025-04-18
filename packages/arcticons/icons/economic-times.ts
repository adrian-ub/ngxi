import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEconomicTimesIcon],svg[arcticons-economic-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.025 32.114V15.886M14.641 24h5.253m2.798-8.114v1.517m0 13.194v1.517h-8.05V15.885h18.717v1.517m-13.465 5.081v3.034m9.648 6.597h-3.034m-11.867 0h-1.517m1.517-16.228h-1.517"></svg:path>`,
})
export class ArcticonsEconomicTimesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
