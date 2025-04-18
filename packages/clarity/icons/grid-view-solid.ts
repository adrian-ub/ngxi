import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityGridViewSolidIcon],svg[clarity-grid-view-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12" height="12" x="4" y="4" fill="currentColor" class="clr-i-solid clr-i-solid-path-1" rx="2" ry="2"></svg:rect><svg:rect width="12" height="12" x="20" y="4" fill="currentColor" class="clr-i-solid clr-i-solid-path-2" rx="2" ry="2"></svg:rect><svg:rect width="12" height="12" x="4" y="20" fill="currentColor" class="clr-i-solid clr-i-solid-path-3" rx="2" ry="2"></svg:rect><svg:rect width="12" height="12" x="20" y="20" fill="currentColor" class="clr-i-solid clr-i-solid-path-4" rx="2" ry="2"></svg:rect><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityGridViewSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
