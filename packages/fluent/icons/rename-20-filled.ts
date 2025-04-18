import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRename20FilledIcon],svg[fluent-rename-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a.5.5 0 0 0 0 1h1v14h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1V3h1a.5.5 0 0 0 0-1zm-4 2h4v12h-4A2.5 2.5 0 0 1 2 13.5v-7A2.5 2.5 0 0 1 4.5 4m11 12h-4V4h4A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class FluentRename20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
