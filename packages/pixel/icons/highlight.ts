import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelHighlightIcon],svg[pixel-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v8H11V1H9v10h1v2h1v2h1v6H1v2h19v-8h1v-2h1v-2h1V1zm-3 20h-4v-4h4zm2-8h-1v2h-6v-2h-1v-2h8z"></svg:path>`,
})
export class PixelHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
