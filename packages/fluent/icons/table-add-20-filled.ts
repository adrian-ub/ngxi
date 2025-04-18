import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableAdd20FilledIcon],svg[fluent-table-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-6 5V8H3v4zm2.6 0A5.52 5.52 0 0 1 12 9.6V8H8v4zm4.9-3c.9 0 1.75.216 2.5.6V8h-4v1.207A5.5 5.5 0 0 1 14.5 9M9 14.5a5.5 5.5 0 0 1 .207-1.5H8v4h1.6a5.5 5.5 0 0 1-.6-2.5M7 13H3v1.5A2.5 2.5 0 0 0 5.5 17H7zm5-6V3H8v4zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3zm12 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"></svg:path>`,
})
export class FluentTableAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
