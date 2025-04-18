import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineTableRowsIcon],svg[ic-baseline-table-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z"></svg:path>`,
})
export class IcBaselineTableRowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
