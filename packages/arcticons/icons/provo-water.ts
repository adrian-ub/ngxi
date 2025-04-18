import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProvoWaterIcon],svg[arcticons-provo-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.354 18.267c-2.926 2.18-7.051 3.732-12.354-1.218s-9.427-3.398-12.354-1.218m24.708 9.387C33.428 27.398 29.303 28.949 24 24s-9.427-3.398-12.354-1.218m24.708 9.387C33.428 34.349 29.303 35.9 24 30.95s-9.427-3.398-12.354-1.218"></svg:path>`,
})
export class ArcticonsProvoWaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
