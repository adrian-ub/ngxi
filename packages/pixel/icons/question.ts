import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelQuestionIcon],svg[pixel-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18h3v3h-3zm7-13v6h-1v1h-1v1h-2v2h-3v-3h1v-1h2v-1h1V6h-4v1H9v1H7V5h1V4h1V3h6v1h1v1z"></svg:path>`,
})
export class PixelQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
