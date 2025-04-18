import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAlignLeftTextLineIcon],svg[clarity-align-left-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 26H6v2.2h14.25a1.1 1.1 0 0 0 0-2.2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M28 20H6v2.2h22a1.1 1.1 0 0 0 0-2.2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M22.6 15.1a1.1 1.1 0 0 0-1.1-1.1H6v2.2h15.5a1.1 1.1 0 0 0 1.1-1.1" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M29.25 8H6v2.2h23.25a1.1 1.1 0 1 0 0-2.2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAlignLeftTextLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
