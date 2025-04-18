import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignOrderAdjustmentColumnIcon],svg[tdesign-order-adjustment-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v8h5.586l-2-2L18 7.586L22.414 12L18 16.414L16.586 15l2-2H13v8h-2v-8H5.414l2 2L6 16.414L1.586 12L6 7.586L7.414 9l-2 2H11V3z"></svg:path>`,
})
export class TdesignOrderAdjustmentColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
