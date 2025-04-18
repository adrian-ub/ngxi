import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPinLineIcon],svg[clarity-pin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 16.59a1 1 0 0 1-.71-.29L19.7 3.71a1 1 0 0 1 1.41-1.41l12.6 12.59a1 1 0 0 1-.71 1.7" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m28.52 15.56l-1.41-1.41l-7.2 7.2a1 1 0 0 0-.25 1a9 9 0 0 1-1.53 8.09L5.58 17.87a9 9 0 0 1 8.09-1.53a1 1 0 0 0 1-.25l7.2-7.2l-1.43-1.41l-6.79 6.79a10.94 10.94 0 0 0-10.24 2.84a1 1 0 0 0 0 1.42l6.33 6.33l-7.45 7.43A1 1 0 1 0 3.7 33.7l7.44-7.44l6.33 6.33a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.3a11 11 0 0 0 2.84-10.24Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPinLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
