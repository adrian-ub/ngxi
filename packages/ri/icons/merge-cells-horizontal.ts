import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMergeCellsHorizontalIcon],svg[ri-merge-cells-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v5.999h2V9l3 3l-3 3v-2H5v6h6v-2h2v2h6v-6h-2v2l-3-3l3-3v1.999h2V5h-6v2h-2zm2 8v2h-2v-2zm0-4v2h-2V9z"></svg:path>`,
})
export class RiMergeCellsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
