import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowDataTransferDiagonalIcon],svg[hugeicons-circle-arrow-data-transfer-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m13.69 8l-4.813 5.107c-.392.416-.588.624-.744.562s-.143-.342-.118-.904l.081-1.772M10.31 16l4.813-5.107c.392-.416.588-.624.744-.562s.143.342.117.904l-.08 1.772"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsCircleArrowDataTransferDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
