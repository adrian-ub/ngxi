import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineDeveloperBoardOffIcon],svg[ic-outline-developer-board-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V5c0-1.1-.9-2-2-2H5.83zM12 9.17V7h4v3h-3.17zM9.83 7H11v1.17zm4 4H16v2.17zM18 21c.06 0 .11 0 .16-.01l2.32 2.32l1.41-1.41L2.1 2.1L.69 3.51l1.32 1.32C2 4.89 2 4.94 2 5v14c0 1.1.9 2 2 2zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2z"></svg:path>`,
})
export class IcOutlineDeveloperBoardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
