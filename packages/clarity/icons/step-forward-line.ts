import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityStepForwardLineIcon],svg[clarity-step-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 32.23a2 2 0 0 1-2-2V5.77a2 2 0 0 1 3.17-1.63l17.06 12.24a2 2 0 0 1 0 3.25L6.17 31.86a2 2 0 0 1-1.17.37M5 5.77v24.46L22.07 18Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M31 32h-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M28 6v24h3V6Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityStepForwardLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
