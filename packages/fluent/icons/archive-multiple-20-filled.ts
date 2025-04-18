import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchiveMultiple20FilledIcon],svg[fluent-archive-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v1A1.5 1.5 0 0 0 3.5 6h11A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2zM15 7H3v5.5A3.5 3.5 0 0 0 6.5 16h5a3.5 3.5 0 0 0 3.5-3.5zM7 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M8.5 18a3.5 3.5 0 0 1-2.45-1h6.45a3.5 3.5 0 0 0 3.5-3.5V7.085A1.5 1.5 0 0 1 17 8.5v5a4.5 4.5 0 0 1-4.5 4.5z"></svg:path>`,
})
export class FluentArchiveMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
