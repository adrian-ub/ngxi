import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAlignRightTextLineIcon],svg[clarity-align-right-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.65 27.1a1.1 1.1 0 0 0 1.1 1.1H30V26H15.75a1.1 1.1 0 0 0-1.1 1.1" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M6.9 21.1A1.1 1.1 0 0 0 8 22.2h22V20H8a1.1 1.1 0 0 0-1.1 1.1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M13.4 15.1a1.1 1.1 0 0 0 1.1 1.1H30V14H14.5a1.1 1.1 0 0 0-1.1 1.1" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M6.75 8a1.1 1.1 0 1 0 0 2.2H30V8Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAlignRightTextLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
