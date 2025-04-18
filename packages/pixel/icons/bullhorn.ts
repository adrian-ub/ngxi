import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBullhornIcon],svg[pixel-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V9h-1V3h-1V2h-1v1h-1v1h-2v1h-2v1h-2v1H2v1H1v7h1v1h3v5h1v1h2v-1h1v-5h3v1h2v1h2v1h2v1h1v1h1v-1h1v-6h1v-1h1v-3zm-3 7h-2v-1h-2v-1h-2v-1h-3V9h3V8h2V7h2V6h2z"></svg:path>`,
})
export class PixelBullhornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
