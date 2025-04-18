import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdobeAnalyticsIcon],svg[arcticons-adobe-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.584 26.951l3.167-2.683l2.982 1.975l5.739-5.292l2.832 2.274l5.218-4.025M15.876 32.721v-4.827m4.062 7.007v-6.224M24 35.627V25.565m4.062 9.336v-9.093m4.062 6.503v-8.572"></svg:path>`,
})
export class ArcticonsAdobeAnalyticsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
