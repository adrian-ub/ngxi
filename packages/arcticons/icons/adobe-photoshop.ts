import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdobePhotoshopIcon],svg[arcticons-adobe-photoshop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.803 33V15h5.893c3.331 0 6.032 2.707 6.032 6.045s-2.7 6.045-6.032 6.045h-5.893m14.709 4.904c.822.69 1.709 1.006 3.7 1.006h1.01a2.98 2.98 0 0 0 2.975-2.981h0a2.98 2.98 0 0 0-2.974-2.981h-2.02a2.98 2.98 0 0 1-2.974-2.982h0a2.98 2.98 0 0 1 2.974-2.981h1.01c1.992 0 2.88.316 3.701 1.006"></svg:path>`,
})
export class ArcticonsAdobePhotoshopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
