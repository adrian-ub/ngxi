import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableInsertRow20RegularIcon],svg[fluent-table-insert-row-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM3 11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm9 1H8V8h4zM5 8h2v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m8 4V8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z"></svg:path>`,
})
export class FluentTableInsertRow20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
