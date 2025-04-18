import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableInsertColumn20RegularIcon],svg[fluent-table-insert-column-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm13 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM9 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1 9V8h4v4zm4-7v2H8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1m-4 8h4v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentTableInsertColumn20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
