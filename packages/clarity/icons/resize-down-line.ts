import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityResizeDownLineIcon],svg[clarity-resize-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 15h-9.59l9.25-9.25a1 1 0 0 0-1.41-1.41L21 13.59V4a1 1 0 0 0-2 0v13h13a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M4 19a1 1 0 0 0 0 2h9.59l-9.26 9.25a1 1 0 1 0 1.41 1.41L15 22.41V32a1 1 0 0 0 2 0V19Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityResizeDownLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
