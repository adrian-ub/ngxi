import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSplitCellsHorizontalIcon],svg[ri-split-cells-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2zm4 4l3 3l-3 3v-2H9v2l-3-3l3-3v2h6z"></svg:path>`,
})
export class RiSplitCellsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
