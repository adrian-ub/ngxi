import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTranslateYouIcon],svg[arcticons-translate-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.625 24.31l5.32-12.89m5.1 12.93l-5.1-12.93m3.4 8.6h-6.95"></svg:path><svg:rect width="24.67" height="24.67" x="5.505" y="5.5" fill="none" stroke="currentColor" stroke-linejoin="round" rx="3.64" ry="3.64"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.835 30.17v8.69c0 2 1.64 3.64 3.64 3.64h17.38c2 0 3.64-1.64 3.64-3.64V21.47c0-2-1.64-3.64-3.64-3.64h-8.69"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.005 25.352h5.474m-3.703.026c-.868 7.993-4.674 10.7-11.52 12.743"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.124 32.449c1.932 2.881 5.008 4.405 9.254 5.672"></svg:path>`,
})
export class ArcticonsTranslateYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
