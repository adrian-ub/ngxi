import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutCellsLargeIcon],svg[gravity-ui-layout-cells-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5H8.75v3.75h4.75V5A1.5 1.5 0 0 0 12 3.5m1.5 5.25H8.75v3.75H12a1.5 1.5 0 0 0 1.5-1.5zm-6.25-1.5V3.5H4A1.5 1.5 0 0 0 2.5 5v2.25zM2.5 8.75h4.75v3.75H4A1.5 1.5 0 0 1 2.5 11zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutCellsLargeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
