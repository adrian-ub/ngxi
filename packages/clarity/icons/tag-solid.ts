import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTagSolidIcon],svg[clarity-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.93 19.2L17.33 4.6a2 2 0 0 0-1.41-.6H6a2 2 0 0 0-2 2v9.92a2 2 0 0 0 .59 1.41l14.6 14.6a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 .01-2.83M9.65 11.31a1.66 1.66 0 1 1 1.66-1.66a1.66 1.66 0 0 1-1.66 1.66" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTagSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
