import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumnAndRow24FilledIcon],svg[fluent-table-freeze-column-and-row-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v8.25h5v-5H4.5V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H14.5V16h-5v5h8.25A3.25 3.25 0 0 0 21 17.75zM8 16H3v1.75A3.25 3.25 0 0 0 6.25 21H8zm1.5-1.5h5v-5h-5z"></svg:path>`,
})
export class FluentTableFreezeColumnAndRow24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
