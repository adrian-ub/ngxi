import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackBelow28FilledIcon],svg[fluent-table-stack-below-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 23.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5zM25 11v5a1 1 0 0 1-1 1h-5.5v-6zm0-4.25V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75M11 3h6v6.5h-6zM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3M4 17a1 1 0 0 1-1-1v-5h6.5v6zm13-6h-6v6h6z"></svg:path>`,
})
export class FluentTableStackBelow28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
