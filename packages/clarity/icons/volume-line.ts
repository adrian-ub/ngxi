import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityVolumeLineIcon],svg[clarity-volume-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.88 32H12a4 4 0 0 1-4-4V11.46L2.31 5.77a1 1 0 0 1-.22-1.09A1 1 0 0 1 3 4.06h25.86a1 1 0 0 1 1 1V28a4 4 0 0 1-3.98 4M5.43 6l4.28 4.34a.75.75 0 0 1 .21.63v17A2.13 2.13 0 0 0 12 30h13.88A2.1 2.1 0 0 0 28 28V6Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M33 16a1 1 0 0 1-1-1V6h-3.14a.92.92 0 0 1-1-.9a1 1 0 0 1 1-1H33a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M24 11h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M24 15h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M24 19h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M24 27h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M24 23h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVolumeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
