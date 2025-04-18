import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[claritySortByLineIcon],svg[clarity-sort-by-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.54 13H7.46a1 1 0 0 1 0-2h21.08a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M21.17 19H7.46a1 1 0 0 1 0-2h13.71a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M13.74 25H7.46a1 1 0 0 1 0-2h6.28a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClaritySortByLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
