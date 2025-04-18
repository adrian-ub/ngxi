import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextSortDescending16FilledIcon],svg[fluent-text-sort-descending-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1.75A.75.75 0 0 1 2.75 1h3.5a.75.75 0 0 1 .592 1.21L4.284 5.5H6.25a.75.75 0 1 1 0 1.5h-3.5a.75.75 0 0 1-.592-1.21L4.717 2.5H2.75A.75.75 0 0 1 2 1.75m3.205 6.744a.75.75 0 0 0-1.41 0l-2 5.5a.75.75 0 1 0 1.41.512L3.39 14h2.222l.184.506a.75.75 0 1 0 1.41-.513zM3.935 12.5l.565-1.556l.566 1.556zM12.25 1a.75.75 0 0 1 .75.75v10.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V1.75a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentTextSortDescending16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
