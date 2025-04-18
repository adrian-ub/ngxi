import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading3ParagraphStylesHeadingIcon],svg[streamline-heading-3-paragraph-styles-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.538 11.866c.182.515.673.884 1.25.884h.884c.733 0 1.327-.594 1.327-1.326v-.221c0-.733-.594-1.326-1.327-1.326h-.442h.332a1.216 1.216 0 0 0 0-2.432h-.663c-.557 0-1.026.374-1.17.884M1 12.75V1.25m5.75 0v11.5M1 6.52h5.75"></svg:path>`,
})
export class StreamlineHeading3ParagraphStylesHeadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
