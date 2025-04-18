import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTableSplitIcon],svg[carbon-table-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v4H5V5Zm-10 6h10v7H17Zm-2 7H5v-7h10ZM5 20h10v7H5Zm12 7v-7h10v7Z"></svg:path>`,
})
export class CarbonTableSplitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
