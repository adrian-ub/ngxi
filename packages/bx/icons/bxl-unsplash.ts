import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlUnsplashIcon],svg[bx-bxl-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.625 8.063V3h6.75v5.063h-6.75zm6.75 2.812H21V21H3V10.875h5.625v5.063h6.75v-5.063z" fill="currentColor"></svg:path>`,
})
export class BxBxlUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
