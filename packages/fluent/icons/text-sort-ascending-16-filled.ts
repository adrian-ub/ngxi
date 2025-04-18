import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextSortAscending16FilledIcon],svg[fluent-text-sort-ascending-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.205 1.494a.75.75 0 0 0-1.41 0l-2 5.5a.75.75 0 1 0 1.41.512L3.389 7h2.222l.184.506a.75.75 0 1 0 1.41-.512zM3.935 5.5L4.5 3.945L5.066 5.5zM2 9.75A.75.75 0 0 1 2.75 9h3.5a.75.75 0 0 1 .592 1.21L4.284 13.5h1.967a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.592-1.21l2.559-3.29H2.75A.75.75 0 0 1 2 9.75M12.25 1a.75.75 0 0 1 .75.75v10.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V1.75a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentTextSortAscending16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
