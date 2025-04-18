import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCcSolidIcon],svg[pixel-cc-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zM11 9H7v1H6v4h1v1h4v2H6v-1H5v-1H4V9h1V8h1V7h5zm9 0h-4v1h-1v4h1v1h4v2h-5v-1h-1v-1h-1V9h1V8h1V7h5z"></svg:path>`,
})
export class PixelCcSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
