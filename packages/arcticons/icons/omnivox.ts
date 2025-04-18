import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOmnivoxIcon],svg[arcticons-omnivox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="25.266" r="7.339" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.323 18.434A7.342 7.342 0 0 1 24 4.26a7.34 7.34 0 0 1 2.677 14.175m-10.015 6.998a7.34 7.34 0 1 1 1.515-4.636m11.93 8.538a7.34 7.34 0 1 1-4.114 2.993m-3.989-.006a7.34 7.34 0 1 1-4.111-2.987m11.93-8.545a7.34 7.34 0 1 1 1.509 4.634"></svg:path>`,
})
export class ArcticonsOmnivoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
