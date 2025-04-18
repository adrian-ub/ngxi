import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableBottomRow48RegularIcon],svg[fluent-table-bottom-row-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42 12.25A6.25 6.25 0 0 0 35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75zM8.5 28.5V12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V28.5zm0 7.25V31H17v8.5h-4.75a3.75 3.75 0 0 1-3.75-3.75m20 3.75h-9V31h9zm7.25 0H31V31h8.5v4.75a3.75 3.75 0 0 1-3.75 3.75"></svg:path>`,
})
export class FluentTableBottomRow48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
