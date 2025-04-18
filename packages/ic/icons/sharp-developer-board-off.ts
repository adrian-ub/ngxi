import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDeveloperBoardOffIcon],svg[ic-sharp-developer-board-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V3H5.83zM12 9.17V7h4v3h-3.17zM9.83 7H11v1.17zm4 4H16v2.17zm4.34 10l2.31 2.31l1.41-1.41L2.1 2.1L.69 3.51L2 4.83V21zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2z"></svg:path>`,
})
export class IcSharpDeveloperBoardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
