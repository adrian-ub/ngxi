import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareDownFIcon],svg[jam-arrow-square-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.293 14.707a.997.997 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414L11 11.586V6a1 1 0 0 0-2 0v5.586L6.464 9.05a1 1 0 1 0-1.414 1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
