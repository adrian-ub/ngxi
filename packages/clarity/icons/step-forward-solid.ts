import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityStepForwardSolidIcon],svg[clarity-step-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 31.9a2 2 0 0 1-2-2V5.44a2 2 0 0 1 3.12-1.63L23.18 16a2 2 0 0 1 0 3.25L6.12 31.52A2 2 0 0 1 5 31.9" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:rect width="7" height="28" x="25.95" y="3.67" fill="currentColor" class="clr-i-solid clr-i-solid-path-2" rx="2" ry="2"></svg:rect><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityStepForwardSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
