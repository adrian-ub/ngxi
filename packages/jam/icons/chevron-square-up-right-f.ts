import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareUpRightFIcon],svg[jam-chevron-square-up-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareUpRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
