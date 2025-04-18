import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindowHeaderVertical20FilledIcon],svg[fluent-window-header-vertical-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zm4 10h7.5a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H7z"></svg:path>`,
})
export class FluentWindowHeaderVertical20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
