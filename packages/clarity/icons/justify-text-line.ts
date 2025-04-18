import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityJustifyTextLineIcon],svg[clarity-justify-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10.2h25.75a1.1 1.1 0 1 0 0-2.2H6a1.1 1.1 0 1 0 0 2.2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M31.75 14H6a1.1 1.1 0 1 0 0 2.2h25.75a1.1 1.1 0 1 0 0-2.2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M31.12 20H6.62a1.1 1.1 0 1 0 0 2.2h24.5a1.1 1.1 0 1 0 0-2.2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M30.45 25.83H6.6a1.1 1.1 0 0 0 0 2.2h23.85a1.1 1.1 0 0 0 0-2.2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityJustifyTextLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
