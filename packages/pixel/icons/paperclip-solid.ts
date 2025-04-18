import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPaperclipSolidIcon],svg[pixel-paperclip-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-3h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V5h-1V4h-3v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v5h1v1h1v1h5v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H7v-1H5v-1H4v-1H3v-2H2v-6h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h2V1h4v1h1v1h1v1z"></svg:path>`,
})
export class PixelPaperclipSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
