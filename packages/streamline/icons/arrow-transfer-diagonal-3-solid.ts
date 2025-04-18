import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal3SolidIcon],svg[streamline-arrow-transfer-diagonal-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 0h3.5a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-.854.354L8.104 3.31L2.207 9.207A1 1 0 0 1 .793 7.793l5.896-5.897L5.646.854A.5.5 0 0 1 6 0m7.207 6.207a1 1 0 0 0-1.414-1.414l-5.897 5.896l-1.042-1.043A.5.5 0 0 0 4 10v3.5a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 .354-.854L7.31 12.104l5.896-5.897Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
