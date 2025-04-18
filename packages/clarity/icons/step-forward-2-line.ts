import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityStepForward2LineIcon],svg[clarity-step-forward-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.08 6.52a1.68 1.68 0 0 0 0 2.4L16.51 18l-9.39 9.08a1.7 1.7 0 0 0 2.36 2.44L21.4 18L9.48 6.47a1.69 1.69 0 0 0-2.4.05" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M26.49 5a1.7 1.7 0 0 0-1.7 1.7v22.6a1.7 1.7 0 0 0 3.4 0V6.7a1.7 1.7 0 0 0-1.7-1.7" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityStepForward2LineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
