import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNoCellIcon],svg[ic-sharp-no-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.19 21.19L2.81 2.81L1.39 4.22L5 7.83V23h14v-1.17l.78.78zM7 18V9.83L15.17 18zM8.83 6L5 2.17V1h14v15.17l-2-2V6z"></svg:path>`,
})
export class IcSharpNoCellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
