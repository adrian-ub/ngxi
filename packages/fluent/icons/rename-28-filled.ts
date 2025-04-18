import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRename28FilledIcon],svg[fluent-rename-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 2a.75.75 0 0 0 0 1.5h1.5v21h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-21h1.5a.75.75 0 0 0 0-1.5zm-5.5 4.02h6v16h-6A3.25 3.25 0 0 1 3 18.77v-9.5a3.25 3.25 0 0 1 3.25-3.25m15.5 16h-6v-16h6A3.25 3.25 0 0 1 25 9.27v9.5a3.25 3.25 0 0 1-3.25 3.25"></svg:path>`,
})
export class FluentRename28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
