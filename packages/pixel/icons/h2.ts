import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelH2Icon],svg[pixel-h2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v16h-2v-8H3v8H1V4h2v6h7V4zm11 2v5h-1v1h-1v2h-1v1h-1v1h-1v1h-1v1h6v2h-9v-3h1v-1h1v-1h1v-1h1v-1h1v-2h1v-1h1V7h-1V6h-3v1h-1v3h-2V6h1V5h1V4h5v1h1v1z"></svg:path>`,
})
export class PixelH2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
