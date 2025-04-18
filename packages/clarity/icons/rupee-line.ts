import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityRupeeLineIcon],svg[clarity-rupee-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h-3.86a7.5 7.5 0 0 0-1.54-2H28a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2h7.55a5.42 5.42 0 0 1 4.2 2H10a1 1 0 0 0 0 2h12.79a5.5 5.5 0 0 1 .21 1.51A5.48 5.48 0 0 1 17.55 17h-6.41a1 1 0 0 0-.75 1.66L22.06 32a1 1 0 1 0 1.5-1.32L13.35 19h4.21a7.51 7.51 0 0 0 7.3-9H28a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityRupeeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
