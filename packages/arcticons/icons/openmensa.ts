import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenmensaIcon],svg[arcticons-openmensa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5a11.84 11.84 0 0 0-11.84 11.84v18.6A1.84 1.84 0 0 0 14 36.78h20a1.84 1.84 0 0 0 1.84-1.84v-18.6A11.84 11.84 0 0 0 24 4.5"></svg:path><svg:rect width="6.62" height="16.65" x="5.53" y="16.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".92"></svg:rect><svg:rect width="6.63" height="16.65" x="35.84" y="16.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".92"></svg:rect><svg:rect width="6.63" height="6.63" x="14.63" y="36.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".92"></svg:rect><svg:rect width="6.63" height="6.63" x="26.74" y="36.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".92"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.73 20.82v-4.2m-2.21 4.39v-4.39m4.27 4.2v-4.2m2.22 4.39v-4.39M32 21a3.25 3.25 0 1 1-6.49 0"></svg:path><svg:ellipse cx="19.23" cy="20.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.29" ry="3.85"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.23 33.32v-9.01m9.54 9.01v-9.01"></svg:path>`,
})
export class ArcticonsOpenmensaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
