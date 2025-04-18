import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilterDismiss20FilledIcon],svg[fluent-filter-dismiss-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.726 10.25a5.5 5.5 0 0 0 2.274.727V11a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1 0-1.5zM9.022 6c.048.525.169 1.028.353 1.5H2.75a.75.75 0 0 1 0-1.5zM12 15.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75M14.5 10a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m1.854-6.354a.5.5 0 0 1 0 .708L15.207 5.5l1.147 1.146a.5.5 0 0 1-.708.708L14.5 6.207l-1.146 1.147a.5.5 0 0 1-.708-.708L13.793 5.5l-1.147-1.146a.5.5 0 0 1 .708-.708L14.5 4.793l1.146-1.147a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentFilterDismiss20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
