import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowDataTransferDiagonalIcon],svg[hugeicons-arrow-data-transfer-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 19l9.18-9.006c.748-.734 1.122-1.1 1.444-.967c.323.134.329.659.34 1.708l.036 3.31M15 5l-9.18 9.006c-.748.734-1.122 1.1-1.444.967c-.323-.134-.329-.659-.34-1.708L4 9.955" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowDataTransferDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
