import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUnsplashLineIcon],svg[ri-unsplash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.001 10v4h4v-4h7v11h-18V10zm-2 2h-3v7h14v-7h-3L16 16H8zm8-9v6h-8V3zm-2 2h-4v2h4z"></svg:path>`,
})
export class RiUnsplashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
