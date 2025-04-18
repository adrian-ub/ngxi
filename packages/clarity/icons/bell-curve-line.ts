import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBellCurveLineIcon],svg[clarity-bell-curve-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 29H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M33 25h-.62a8.11 8.11 0 0 1-8-6.67C23.62 14.44 21.89 7.94 18 7.94s-5.69 6.51-6.38 10.39a8.11 8.11 0 0 1-8 6.65H3a1 1 0 1 1 0-2h.6a6.11 6.11 0 0 0 6-4.98c1.41-7.88 4.3-12 8.35-12s6.93 4.16 8.33 12a6.11 6.11 0 0 0 6 5H33a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBellCurveLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
