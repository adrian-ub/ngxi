import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRename16FilledIcon],svg[fluent-rename-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2a.5.5 0 0 0 0 1h1v10h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1V3h1a.5.5 0 0 0 0-1zM4 4h2.5v8H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 8H9.5V4H12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></svg:path>`,
})
export class FluentRename16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
