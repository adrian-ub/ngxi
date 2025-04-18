import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityItalicLineIcon],svg[clarity-italic-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.42 8H17.1a1.1 1.1 0 1 0 0 2.19h2.13l-6.12 15.36h-2.64a1.1 1.1 0 1 0 0 2.19h7.33a1.1 1.1 0 1 0 0-2.19h-2.29l6.13-15.36h2.78a1.1 1.1 0 1 0 0-2.19" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityItalicLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
