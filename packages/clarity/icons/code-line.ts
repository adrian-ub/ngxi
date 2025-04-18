import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCodeLineIcon],svg[clarity-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.71 12.59a1 1 0 0 0-1.39-.26l-6.53 4.45a1 1 0 0 0 0 1.65l6.53 4.45a1 1 0 1 0 1.13-1.65l-5.32-3.62L13.45 14a1 1 0 0 0 .26-1.41" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m30.21 16.78l-6.53-4.45A1 1 0 1 0 22.55 14l5.32 3.63l-5.32 3.63a1 1 0 0 0 1.13 1.65l6.53-4.45a1 1 0 0 0 0-1.65Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M19.94 9.83a.9.9 0 0 0-1.09.66l-3.44 13.8a.9.9 0 0 0 .66 1.09h.22a.9.9 0 0 0 .87-.68l3.44-13.81a.9.9 0 0 0-.66-1.06" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCodeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
