import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIsuzuIcon],svg[arcticons-isuzu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.19 27.24h7.779a1.011 1.011 0 0 0 .327-1.968l-7.43-2.545a1.011 1.011 0 0 1 .328-1.968h7.786m1.683.001v4.963c0 .838.68 1.518 1.518 1.518h4.301c.838 0 1.518-.68 1.518-1.518h0V20.76m12.163 0v4.963c0 .838.68 1.518 1.518 1.518h4.301c.838 0 1.518-.68 1.518-1.518V20.76m-39 0v6.48m29.972 0h-7.778a1.011 1.011 0 0 1-.328-1.968l7.43-2.545a1.011 1.011 0 0 0-.328-1.968h-7.785"></svg:path>`,
})
export class ArcticonsIsuzuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
