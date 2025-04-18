import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowDownBoxIcon],svg[pixelarticons-arrow-down-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm16 16V5H5v14zM11 7h2v6h2v2h-2v2h-2v-2H9v-2h2zm-2 4v2H7v-2zm8 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsArrowDownBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
