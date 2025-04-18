import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableInsertColumn16RegularIcon],svg[fluent-table-insert-column-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zm11 0a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zM6.5 2A1.5 1.5 0 0 0 5 3.5v9A1.5 1.5 0 0 0 6.5 14h3a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 9.5 2zM6 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5H6zM6 6h4v4H6zm0 5h4v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class FluentTableInsertColumn16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
