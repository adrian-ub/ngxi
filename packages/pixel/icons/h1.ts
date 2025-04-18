import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelH1Icon],svg[pixel-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18v2h-9v-2h4V6h-1v1h-1v1h-2V6h1V5h1V4h4v14zM12 4v16h-2v-8H3v8H1V4h2v6h7V4z"></svg:path>`,
})
export class PixelH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
