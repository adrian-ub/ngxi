import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBulletListLineIcon],svg[clarity-bullet-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5.21" cy="9.17" r="2" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"></svg:circle><svg:circle cx="5.21" cy="17.17" r="2" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"></svg:circle><svg:circle cx="5.21" cy="25.17" r="2" fill="currentColor" class="clr-i-outline clr-i-outline-path-3"></svg:circle><svg:path fill="currentColor" d="M32.42 9a1 1 0 0 0-1-1H10v2h21.42a1 1 0 0 0 1-1" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M31.42 16H10v2h21.42a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M31.42 24H10v2h21.42a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBulletListLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
