import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTableFillIcon],svg[ri-table-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H9V10h6zm2 0V10h5v10a1 1 0 0 1-1 1zM7 21H3a1 1 0 0 1-1-1V10h5zM22 8H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiTableFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
