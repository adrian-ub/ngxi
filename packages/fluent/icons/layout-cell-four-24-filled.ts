import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutCellFour24FilledIcon],svg[fluent-layout-cell-four-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 21h-5v-8.25H21v5A3.25 3.25 0 0 1 17.75 21M21 11.25h-8.25V3h5A3.25 3.25 0 0 1 21 6.25zm-9.75 0V3h-5A3.25 3.25 0 0 0 3 6.25v5zM3 12.75v5A3.25 3.25 0 0 0 6.25 21h5v-8.25z"></svg:path>`,
})
export class FluentLayoutCellFour24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
