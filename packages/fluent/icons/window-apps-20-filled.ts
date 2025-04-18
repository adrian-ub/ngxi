import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindowApps20FilledIcon],svg[fluent-window-apps-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H4v7a2 2 0 0 0 2 2h1v1H6a3 3 0 0 1-3-3zm11.75 2A1.75 1.75 0 0 0 13 9.75V13H9.75A1.75 1.75 0 0 0 8 14.75v2.5c0 .966.784 1.75 1.75 1.75h6.75a2.5 2.5 0 0 0 2.5-2.5V9.75A1.75 1.75 0 0 0 17.25 8zM18 16.5a1.5 1.5 0 0 1-1.5 1.5H14v-4h4zm-4-6.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75V13h-4zM9.75 14H13v4H9.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentWindowApps20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
