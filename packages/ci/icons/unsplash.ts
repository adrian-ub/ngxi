import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciUnsplashIcon],svg[ci-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H3V10.875h5.625v5.063h6.75v-5.063H21V21ZM15.375 8.063h-6.75V3h6.75v5.063Z"></svg:path>`,
})
export class CiUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
