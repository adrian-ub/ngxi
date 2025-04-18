import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowDownDashedSquareIcon],svg[streamline-arrow-down-dashed-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.705 13.394a3 3 0 0 1-2.07-2m10.66 2a3 3 0 0 0 2.07-2M6 13.5h2m0-13H6M.5 6v2m13-2v2M2.705.606a3 3 0 0 0-2.07 2m10.66-2a3 3 0 0 1 2.07 2M7 4v6M5 8l2 2l2-2"></svg:path>`,
})
export class StreamlineArrowDownDashedSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
