import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCursorMoveLineIcon],svg[clarity-cursor-move-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.85 12.89a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l2.71 2.7H19V5.86l2.69 2.7a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.42L18 2l-5.11 5.15a1 1 0 0 0-.29.71a1 1 0 0 0 1.71.7L17 5.86V17H5.86l2.7-2.69a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0L2 18l5.14 5.11a1 1 0 0 0 .71.29a1 1 0 0 0 .7-1.71L5.86 19H17v11.14l-2.69-2.7a1 1 0 0 0-1.71.7a1 1 0 0 0 .29.71L18 34l5.11-5.14a1 1 0 0 0 0-1.42a1 1 0 0 0-1.41 0l-2.7 2.7V19h11.14l-2.7 2.69a1 1 0 0 0 .7 1.71a1 1 0 0 0 .71-.29L34 18Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCursorMoveLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
