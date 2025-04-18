import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBarCodeLineIcon],svg[clarity-bar-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a1 1 0 0 0-1 1v22a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M9 7a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M13 7a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M17 7a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M21 7a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M25 7a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M29 7a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M33 7a1 1 0 0 0-1 1v22a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBarCodeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
