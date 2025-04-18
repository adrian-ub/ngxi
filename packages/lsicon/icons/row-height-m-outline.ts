import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRowHeightMOutlineIcon],svg[lsicon-row-height-m-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 4h5M9 5h5M9 6h5m-5 6h5M9 8h5M4.5 3v10M7 11.207L4.5 13.5L2 11.207m0-6.414L4.5 2.5L7 4.793"></svg:path>`,
})
export class LsiconRowHeightMOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
