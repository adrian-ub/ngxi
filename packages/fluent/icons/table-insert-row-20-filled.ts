import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableInsertRow20FilledIcon],svg[fluent-table-insert-row-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM3 11a2 2 0 0 0 2 2h2V7H5a2 2 0 0 0-2 2zm9 2H8V7h4zm1 0V7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2z"></svg:path>`,
})
export class FluentTableInsertRow20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
