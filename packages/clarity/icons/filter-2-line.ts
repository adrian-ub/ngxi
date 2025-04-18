import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFilter2LineIcon],svg[clarity-filter-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 11H3a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M28 17H8a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M23 23H13a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFilter2LineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
