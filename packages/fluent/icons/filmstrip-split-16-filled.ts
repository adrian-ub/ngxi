import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilmstripSplit16FilledIcon],svg[fluent-filmstrip-split-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM1 5.5A2.5 2.5 0 0 1 3.5 3h3v10h-3A2.5 2.5 0 0 1 1 10.5zm2 0v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0M3.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m6 4V3h3A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5zM12 5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0m.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class FluentFilmstripSplit16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
