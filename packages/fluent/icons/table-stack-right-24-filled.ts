import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackRight24FilledIcon],svg[fluent-table-stack-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zm0 6.5H3v5h5zm1.5 5v-5h5v5zM8 16H3v1.75A3.25 3.25 0 0 0 6.25 21H8zm1.5 5v-5h5v4.25a.75.75 0 0 1-.75.75zm0-13V3h4.25a.75.75 0 0 1 .75.75V8zm10 12.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class FluentTableStackRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
