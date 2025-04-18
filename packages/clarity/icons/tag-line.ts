import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTagLineIcon],svg[clarity-tag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10.52" cy="10.52" r="1.43" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"></svg:circle><svg:path fill="currentColor" d="M31.93 19.2L17.33 4.6a2 2 0 0 0-1.41-.6H6a2 2 0 0 0-2 2v9.92a2 2 0 0 0 .59 1.41l14.6 14.6a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 .01-2.83M20.62 30.52L6 15.91V6h9.92l14.6 14.62Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTagLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
