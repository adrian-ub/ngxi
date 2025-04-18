import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCircleArrowLineIcon],svg[clarity-circle-arrow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m18.08 8.26l-7.61 7.61a1 1 0 1 0 1.41 1.41l5.12-5.1v15a1 1 0 0 0 2 0V12l5.28 5.28a1 1 0 1 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCircleArrowLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
