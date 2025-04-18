import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCheckCircleLineIcon],svg[clarity-check-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m0 22a10 10 0 1 1 10-10a10 10 0 0 1-10 10" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m16.34 23.74l-5-5a1 1 0 0 1 1.41-1.41l3.59 3.59l6.78-6.78a1 1 0 0 1 1.41 1.41Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCheckCircleLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
