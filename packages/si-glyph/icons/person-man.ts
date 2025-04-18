import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonManIcon],svg[si-glyph-person-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.918 13.338l-.943 1.62l-.942-1.62l.488-3.296h.908zM6.534 15C4.833 12.746 5.378 9.224 5.21 9C1.123 8.999 1 15 1 15zm5.048 0H17c-.001 0 0-6.031-3.68-6.031c-.164.22-.035 3.759-1.738 6.031M9.008 8.941C7.39 8.941 6 5.732 6 4.064c0-1.67 1.389-3.006 3.008-3.006a3.016 3.016 0 0 1 2.994 3.006c0 1.668-1.374 4.877-2.994 4.877"></svg:path>`,
})
export class SiGlyphPersonManIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
