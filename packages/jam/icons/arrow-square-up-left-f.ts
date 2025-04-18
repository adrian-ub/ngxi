import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareUpLeftFIcon],svg[jam-arrow-square-up-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.172 6.172a.997.997 0 0 0-1 1v6a1 1 0 0 0 2 0V9.586l3.95 3.95a1 1 0 0 0 1.414-1.415l-3.95-3.95h3.586a1 1 0 0 0 0-2zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamArrowSquareUpLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
