import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNaverCafeIcon],svg[arcticons-naver-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.752 27.245c0 6.45-5.229 11.68-11.679 11.68s-11.679-5.23-11.679-11.68v-6.702h23.358z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.752 20.543a5.045 5.045 0 0 1 0 10.09h-.5M30.723 9.294a8.597 8.597 0 0 1-8.597 8.597h-5.972a8.597 8.597 0 0 1 8.597-8.597z"></svg:path>`,
})
export class ArcticonsNaverCafeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
