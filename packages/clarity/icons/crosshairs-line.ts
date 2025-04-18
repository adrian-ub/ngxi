import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCrosshairsLineIcon],svg[clarity-crosshairs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 29a11 11 0 1 1 11-11a11 11 0 0 1-11 11m0-20a9 9 0 1 0 9 9a9 9 0 0 0-9-9" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18 23a5 5 0 1 1 5-5a5 5 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3 3 0 0 0-3-3" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M18 9a1 1 0 0 1-1-1V2.8a1 1 0 0 1 2 0V8a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M18 34a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M8 19H3.17a1 1 0 0 1 0-2H8a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M33.1 19H28a1 1 0 0 1 0-2h5.1a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCrosshairsLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
