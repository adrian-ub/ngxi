import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumn24FilledIcon],svg[fluent-table-freeze-column-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zm0 6.5H3v5h5zm1.5 5v-5h5v5zm0 1.5h5v3.5h3.25a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H14.5V8h-5V3h8.25A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H9.5zM8 16H3v1.75A3.25 3.25 0 0 0 6.25 21H8z"></svg:path>`,
})
export class FluentTableFreezeColumn24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
