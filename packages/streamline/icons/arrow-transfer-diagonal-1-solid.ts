import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal1SolidIcon],svg[streamline-arrow-transfer-diagonal-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.998 1.068a1 1 0 0 1-.29.64l-2 2l-7 7A1 1 0 0 1 .292 9.292L6.586 3L5.293 1.707A1 1 0 0 1 6 0h4a1 1 0 0 1 .674.261M7.414 11l6.293-6.293a1 1 0 0 0-1.414-1.414l-7 7l-2 2a.996.996 0 0 0-.05 1.36A1 1 0 0 0 4 14h4a1 1 0 0 0 .707-1.708z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
