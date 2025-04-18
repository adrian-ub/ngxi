import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleMessageDot2Icon],svg[si-glyph-bubble-message-dot-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.019 1.04c-4.398 0-7.968 2.62-7.968 5.852c0 2.95 2.975 5.384 6.842 5.787l-2.048 3.25l6.119-3.603c2.942-.861 5.025-2.968 5.025-5.435c0-3.231-3.569-5.851-7.97-5.851M6 8H4V6h2zm4 0H8V6h2zm4 0h-2V6h2z"></svg:path>`,
})
export class SiGlyphBubbleMessageDot2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
