import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderCellsLargeFillIcon],svg[gravity-ui-layout-header-cells-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 6H8.75v2.5h4.75zM7.25 6H2.5v2.5h4.75zM1 6V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm7.75 4h4.75v1a1.5 1.5 0 0 1-1.5 1.5H8.75zM2.5 10h4.75v2.5H4A1.5 1.5 0 0 1 2.5 11z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderCellsLargeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
