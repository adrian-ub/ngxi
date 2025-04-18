import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCursorArrowSolidIcon],svg[clarity-cursor-arrow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 12.36L3.88 3a1 1 0 0 0-1.29 1.28L12 29.44a1 1 0 0 0 1.89-.05l2.69-8.75l9.12 8.9a1 1 0 0 0 1.41 0l2.35-2.35a1 1 0 0 0 0-1.41l-9.09-8.86L29 14.25a1 1 0 0 0 0-1.89" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCursorArrowSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
