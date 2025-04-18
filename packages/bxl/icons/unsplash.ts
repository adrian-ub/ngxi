import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlUnsplashIcon],svg[bxl-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.625 8.063V3h6.75v5.063zm6.75 2.812H21V21H3V10.875h5.625v5.063h6.75z"></svg:path>`,
})
export class BxlUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
