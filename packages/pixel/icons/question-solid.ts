import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelQuestionSolidIcon],svg[pixel-question-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5v6h-1v1h-2v1h-1v2H9v-3h1v-1h1v-1h2V9h1V7h-1V6h-2v1h-1v1H9v1H8V8H7V7H6V6H5V5h1V4h1V3h2V2h6v1h1v1h1v1zm-5 13h1v3h-1v1h-3v-1H9v-3h1v-1h3z"></svg:path>`,
})
export class PixelQuestionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
