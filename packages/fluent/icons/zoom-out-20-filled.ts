import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomOut20FilledIcon],svg[fluent-zoom-out-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.5a5.5 5.5 0 1 0-2.177 4.383l4.147 4.147l.084.073a.75.75 0 0 0 .976-1.133l-4.147-4.147A5.48 5.48 0 0 0 14 8.5m-3-.75a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentZoomOut20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
