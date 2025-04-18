import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSplitCellsOutlineIcon],svg[flowbite-split-cells-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18v2h6V4H4v2m16 12v2h-6V4h6v2M6.495 14.495L4 12m0 0l2.495-2.495M4 12h5.948m7.498 2.554L20 12m0 0l-2.554-2.554M20 12h-5.832"></svg:path>`,
})
export class FlowbiteSplitCellsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
