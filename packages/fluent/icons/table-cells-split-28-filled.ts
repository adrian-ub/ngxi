import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellsSplit28FilledIcon],svg[fluent-table-cells-split-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 7.5H25v-.75A3.75 3.75 0 0 0 21.25 3H14.5zM13 3H6.75A3.75 3.75 0 0 0 3 6.75v.75h10zm1.5 22h6.75A3.75 3.75 0 0 0 25 21.25v-.75H14.5zM13 20.5H3v.75A3.75 3.75 0 0 0 6.75 25H13zM3 9h22v10H3zm10 1v8h1.5v-8z"></svg:path>`,
})
export class FluentTableCellsSplit28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
