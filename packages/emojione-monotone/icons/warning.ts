import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneWarningIcon],svg[emojione-monotone-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.428 56.709L34.693 4.182C33.953 2.727 32.977 2 32 2s-1.953.728-2.693 2.183L2.572 56.709C1.09 59.621 2.588 62 5.9 62h52.197c3.313 0 4.813-2.379 3.331-5.291m-1.555 2.664c-.24.393-.904.627-1.775.627H5.9c-.87 0-1.534-.232-1.774-.625c-.228-.373-.143-1.029.229-1.758L31.089 5.089c.431-.845.828-1.075.911-1.089c.083.015.48.244.911 1.09l26.734 52.528c.371.728.457 1.384.228 1.755"></svg:path><svg:path fill="currentColor" d="M30.551 42.051c.275 1.84 2.623 1.84 2.898 0l2.748-18.464c.506-7.199-8.904-7.199-8.396 0z"></svg:path><svg:ellipse cx="32" cy="49.605" fill="currentColor" rx="4.219" ry="4.207"></svg:ellipse>`,
})
export class EmojioneMonotoneWarningIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
