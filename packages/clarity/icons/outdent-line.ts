import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityOutdentLineIcon],svg[clarity-outdent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.06 9h-26a1 1 0 1 1 0-2h26a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M31.06 14h-17a1 1 0 0 1 0-2h17a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M31.06 19h-17a1 1 0 0 1 0-2h17a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M31.06 24h-17a1 1 0 0 1 0-2h17a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M31.06 29h-26a1 1 0 0 1 0-2h26a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M9.56 22.54a1 1 0 0 1-.7-.3L4.61 18l4.25-4.24a1 1 0 0 1 1.41 1.41L7.44 18l2.83 2.83a1 1 0 0 1-.71 1.71" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityOutdentLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
