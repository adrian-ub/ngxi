import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOurhomeIcon],svg[arcticons-ourhome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.63 21.85L26 7.64a3 3 0 0 0-3.9 0L5.37 21.85a2.43 2.43 0 0 0-.29 3.44a2.39 2.39 0 0 0 1.92.87h2.09v13.29a1.63 1.63 0 0 0 1.63 1.63h7.35a1.63 1.63 0 0 0 1.63-1.63v-8.18a1 1 0 0 1 1-1h6.64a1 1 0 0 1 1 1v8.18a1.63 1.63 0 0 0 1.63 1.63h7.35a1.63 1.63 0 0 0 1.63-1.63V26.16H41a2.44 2.44 0 0 0 1.59-4.31Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.45 13.18V7.92a.4.4 0 0 1 .39-.39h5.68a.4.4 0 0 1 .39.39h0v10.75"></svg:path>`,
})
export class ArcticonsOurhomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
