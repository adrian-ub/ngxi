import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelViewblocksIcon],svg[pixel-viewblocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11V9h-1V7h-1V6h-1V5h-1V4h-2V3h-2V1h-2v2H9v1H7v1H6v1H5v1H4v2H3v2H1v2h2v2h1v2h1v1h1v1h1v1h2v1h2v2h2v-2h2v-1h2v-1h1v-1h1v-1h1v-2h1v-2h2v-2zm-10 8h-1v-1H8v-1H7v-1H6v-1H5V9h1v1h1v1h1v1h2v1h1zm-1-8v-1H8V9H7V8H6V7h2V6h2V5h4v1h2v1h2v1h-1v1h-1v1h-2v1zm9 4h-1v1h-1v1h-1v1h-2v1h-1v-6h1v-1h2v-1h1v-1h1V9h1z"></svg:path>`,
})
export class PixelViewblocksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
