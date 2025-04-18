import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableAddColumnAfterRtlIcon],svg[ooui-table-add-column-after-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3h-6V2H0v16h12v-1h8V3zm-8 8H7v3H5v-3H2V9h3V6h2v3h3zm4 4h-2V5h2zm4 0h-2V5h2z"></svg:path>`,
})
export class OouiTableAddColumnAfterRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
