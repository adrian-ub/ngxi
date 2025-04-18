import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLagrangeIcon],svg[arcticons-lagrange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.455" cy="28.185" r="9.875" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.069" cy="16.284" r="6.509" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="21.743" cy="25.301" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.627" ry="18.708" transform="rotate(-30 21.743 25.301)"></svg:ellipse><svg:ellipse cx="23.997" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.627" ry="18.708" transform="rotate(-30 23.997 24)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.624 22.442c3.84 7.802 4.787 14.838 1.98 16.459c-3.17 1.83-9.926-3.94-15.092-12.889S13.726 8.327 16.896 6.497c2.684-1.55 7.943 2.353 12.629 9.02"></svg:path>`,
})
export class ArcticonsLagrangeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
