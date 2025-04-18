import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleExclude48FilledIcon],svg[fluent-table-simple-exclude-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 4A6.25 6.25 0 0 0 4 10.25v8.25h14.5V4zM4 29.25V21h14.5v14.5h-8.25A6.25 6.25 0 0 1 4 29.25m31.5-19v8.25H21V4h8.25a6.25 6.25 0 0 1 6.25 6.25m-10.5 19A4.25 4.25 0 0 1 29.25 25h10.5A4.25 4.25 0 0 1 44 29.25v10.5A4.25 4.25 0 0 1 39.75 44h-10.5A4.25 4.25 0 0 1 25 39.75z"></svg:path>`,
})
export class FluentTableSimpleExclude48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
