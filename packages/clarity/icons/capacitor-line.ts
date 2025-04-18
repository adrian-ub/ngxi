import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCapacitorLineIcon],svg[clarity-capacitor-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 34.06a1 1 0 0 1-1-1V3.15a1 1 0 1 1 2 0v29.91a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M21 34.06a1 1 0 0 1-1-1V3.15a1 1 0 1 1 2 0v29.91a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M14.46 19H3a1 1 0 0 1 0-2h11.46a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M33 19H21.54a1 1 0 0 1 0-2H33a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCapacitorLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
