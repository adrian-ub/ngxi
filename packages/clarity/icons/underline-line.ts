import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityUnderlineLineIcon],svg[clarity-underline-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 28.17c5.08 0 8.48-3.08 8.48-9V8.54a1.15 1.15 0 1 0-2.3 0v10.8c0 4.44-2.38 6.71-6.13 6.71s-6.21-2.47-6.21-6.85V8.54a1.15 1.15 0 1 0-2.3 0v10.8C9.53 25.09 13 28.17 18 28.17" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M31 30H5a1.11 1.11 0 0 0 0 2.21h26A1.11 1.11 0 0 0 31 30" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnderlineLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
