import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchiveMultiple24FilledIcon],svg[fluent-archive-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 2A1.75 1.75 0 0 0 3 3.75v1.5C3 6.216 3.784 7 4.75 7h13.5A1.75 1.75 0 0 0 20 5.25v-1.5A1.75 1.75 0 0 0 18.25 2zM19 8H4v7.75a3.75 3.75 0 0 0 3.75 3.75h7.5A3.75 3.75 0 0 0 19 15.75zM9 11.25a.75.75 0 0 1 .75-.75h3.477a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75m12.5.5a3.74 3.74 0 0 0-1.5-3v7.5a4.25 4.25 0 0 1-4.25 4.25h-8.5c.684.91 1.773 1.5 3 1.5h5.5a5.75 5.75 0 0 0 5.75-5.75z"></svg:path>`,
})
export class FluentArchiveMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
