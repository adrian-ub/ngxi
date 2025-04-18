import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggUnsplashIcon],svg[gg-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4.5H9v4h6zm-11 6h5v4h6v-4h5v9H4z"></svg:path>`,
})
export class GgUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
