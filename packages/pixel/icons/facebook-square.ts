import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFacebookSquareIcon],svg[pixel-facebook-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v20h-1v1h-8v-8h2v-1h1v-2h-3V9h1V8h2V5h-4v1h-2v2h-1v4H7v3h3v8H2v-1H1V2h1V1h20v1z"></svg:path>`,
})
export class PixelFacebookSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
