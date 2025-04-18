import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsLeftArrowSquareIcon],svg[bxs-left-arrow-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM12 7v4h5v2h-5v4l-5-5z"></svg:path>`,
})
export class BxsLeftArrowSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
