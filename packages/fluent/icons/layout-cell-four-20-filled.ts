import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutCellFour20FilledIcon],svg[fluent-layout-cell-four-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-3.5v-6.5H17V14a3 3 0 0 1-3 3m3-7.5h-6.5V3H14a3 3 0 0 1 3 3zm-7.5 0V3H6a3 3 0 0 0-3 3v3.5zm-6.5 1V14a3 3 0 0 0 3 3h3.5v-6.5z"></svg:path>`,
})
export class FluentLayoutCellFour20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
