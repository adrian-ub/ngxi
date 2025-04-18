import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImgurIcon],svg[arcticons-imgur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5a5.58 5.58 0 0 1 5.58 5.58h0A5.58 5.58 0 0 1 24 15.66h0a5.58 5.58 0 0 1-5.58-5.58h0A5.58 5.58 0 0 1 24 4.5m0 15.13a5.79 5.79 0 0 1 5.58 6v11.86a5.79 5.79 0 0 1-5.58 6a5.79 5.79 0 0 1-5.58-6V25.64A5.79 5.79 0 0 1 24 19.63"></svg:path>`,
})
export class ArcticonsImgurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
