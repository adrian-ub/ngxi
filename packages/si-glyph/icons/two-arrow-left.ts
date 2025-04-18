import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTwoArrowLeftIcon],svg[si-glyph-two-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.146 8.027L8.89 3.032H4.95L1.007 8.027l4.042 4.964h3.918l.01-.011zm7.783 0l3.951-4.995h-3.939L8.976 8.027l4.064 4.964h3.918l.01-.011z"></svg:path>`,
})
export class SiGlyphTwoArrowLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
