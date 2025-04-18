import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPaintRollerLineIcon],svg[clarity-paint-roller-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 10V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h23a2 2 0 0 0 2-2M6 4h23v6H6Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M33 6h-1v6.29l-13.3 4.25a1 1 0 0 0-.7 1V19h-2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V19h-2v-.73L33.3 14a1 1 0 0 0 .7-1V7a1 1 0 0 0-1-1M20 33h-2V21h2Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPaintRollerLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
