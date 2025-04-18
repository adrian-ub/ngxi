import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowImport16FilledIcon],svg[fluent-arrow-import-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.22 4.22a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06-1.06L9.44 9H1.75a.75.75 0 0 1 0-1.5h7.69L7.22 5.28a.75.75 0 0 1 0-1.06m7.28-.47a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class FluentArrowImport16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
