import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMergeCellsOutlineIcon],svg[flowbite-merge-cells-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18v2H4V4h6v2m4 12v2h6V4h-6v2m-6.495 8.495L10 12m0 0L7.505 9.505M10 12H4.052m12.502 2.554L14 12m0 0l2.554-2.554M14 12h5.832"></svg:path>`,
})
export class FlowbiteMergeCellsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
