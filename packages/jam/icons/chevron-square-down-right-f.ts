import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareDownRightFIcon],svg[jam-chevron-square-down-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11H6a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareDownRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
