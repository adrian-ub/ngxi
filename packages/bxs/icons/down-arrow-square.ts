import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsDownArrowSquareIcon],svg[bxs-down-arrow-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm-8-9V7h2v5h4l-5 5l-5-5z"></svg:path>`,
})
export class BxsDownArrowSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
