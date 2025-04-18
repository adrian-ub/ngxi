import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareDownRightIcon],svg[jam-chevron-square-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm7 9V6a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamChevronSquareDownRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
