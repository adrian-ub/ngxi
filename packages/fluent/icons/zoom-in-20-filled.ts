import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomIn20FilledIcon],svg[fluent-zoom-in-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.5c0 1.248-.416 2.4-1.117 3.323l4.147 4.147a.75.75 0 0 1-.976 1.133l-.084-.073l-4.147-4.147A5.5 5.5 0 1 1 14 8.5M8.5 5.25a.75.75 0 0 0-.75.75v1.75H6a.75.75 0 0 0 0 1.5h1.75V11a.75.75 0 0 0 1.5 0V9.25H11a.75.75 0 0 0 0-1.5H9.25V6a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class FluentZoomIn20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
