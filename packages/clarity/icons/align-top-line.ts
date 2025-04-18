import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAlignTopLineIcon],svg[clarity-align-top-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 4H2a1 1 0 0 0 0 2h32a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M6 31a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8H6Zm2-21h6v20H8Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M20 23a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8H20Zm2-13h6v12h-6Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAlignTopLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
