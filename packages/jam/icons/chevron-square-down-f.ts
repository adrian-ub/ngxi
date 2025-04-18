import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronSquareDownFIcon],svg[jam-chevron-square-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11.828L6.464 8.293A1 1 0 0 0 5.05 9.707l4.243 4.243a.997.997 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronSquareDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
