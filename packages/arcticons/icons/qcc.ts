import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQccIcon],svg[arcticons-qcc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.122 33.123c-5.037 5.038-13.206 5.038-18.243 0s-5.037-13.206 0-18.243c5.038-5.038 13.206-5.038 18.243 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.041 27.042a4.3 4.3 0 1 1 0-6.081"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.763 43.764l-4.56-4.561c-8.139 8.138-21.243 8.424-29.729.649C.99 32.076.132 18.997 7.53 10.18S27.957-.063 37.088 6.944s11.125 19.96 4.523 29.389"></svg:path>`,
})
export class ArcticonsQccIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
