import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUnsplashIcon],svg[pixel-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1h8v6H8zm15 10v12H1V11h7v6h8v-6z"></svg:path>`,
})
export class PixelUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
