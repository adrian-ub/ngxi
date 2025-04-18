import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSplitCellsVerticalIcon],svg[ri-split-cells-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v5.999L9 11v2H5v6h14v-6h-4v-2l4-.001zm-7 1l3 3h-2v6h2l-3 3l-3-3h2V9H9z"></svg:path>`,
})
export class RiSplitCellsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
