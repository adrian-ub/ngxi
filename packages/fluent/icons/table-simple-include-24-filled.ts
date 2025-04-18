import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleInclude24FilledIcon],svg[fluent-table-simple-include-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.25h-.155a3.24 3.24 0 0 0-2.345-1h-5q-.389 0-.75.087V3h5A3.25 3.25 0 0 1 21 6.25zM10.25 13.5q0-.389.087-.75H3v5A3.25 3.25 0 0 0 6.25 21h5v-.155a3.24 3.24 0 0 1-1-2.345zm.905-2.25q.046-.048.095-.095V3h-5A3.25 3.25 0 0 0 3 6.25v5zm.095 2.25a2.25 2.25 0 0 1 2.25-2.25h5a2.25 2.25 0 0 1 2.25 2.25v5a2.25 2.25 0 0 1-2.25 2.25h-5a2.25 2.25 0 0 1-2.25-2.25z"></svg:path>`,
})
export class FluentTableSimpleInclude24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
