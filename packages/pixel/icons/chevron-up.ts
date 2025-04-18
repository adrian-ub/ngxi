import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelChevronUpIcon],svg[pixel-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H2v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
