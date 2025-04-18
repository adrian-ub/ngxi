import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHiltonHonorsIcon],svg[arcticons-hilton-honors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.643 20.25v8m5.3-8v8m-5.3-4.015h5.3m13.235 4.015a2 2 0 0 1-2-2v-1.3a2 2 0 1 1 4 0v1.3a2 2 0 0 1-2 2"></svg:path><svg:circle cx="18.32" cy="20.5" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.32 22.95v5.3m5.962-6.95v6.95m-1.05-5.3h2.099m-4.63-2.7v7a1 1 0 0 0 1 1h.3m15.356 0v-3.3a2 2 0 1 0-4 0m0 3.3v-5.3"></svg:path>`,
})
export class ArcticonsHiltonHonorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
