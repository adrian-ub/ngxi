import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPowerLineIcon],svg[clarity-power-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18 34.15a15 15 0 0 1-7.52-28a1 1 0 0 1 1 1.73a13 13 0 1 0 13 0a1 1 0 1 1 1-1.73a15 15 0 0 1-7.52 28Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPowerLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
