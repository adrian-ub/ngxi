import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAlignRightLineIcon],svg[clarity-align-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 1a1 1 0 0 0-1 1v32a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M4 21v8a1 1 0 0 0 1 1h23V20H5a1 1 0 0 0-1 1m2 1h20v6H6Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M12 7v8a1 1 0 0 0 1 1h15V6H13a1 1 0 0 0-1 1m2 1h12v6H14Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAlignRightLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
