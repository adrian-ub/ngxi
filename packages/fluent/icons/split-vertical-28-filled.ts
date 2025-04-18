import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitVertical28FilledIcon],svg[fluent-split-vertical-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 25.25a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0zM2 6.75A2.75 2.75 0 0 1 4.75 4h7.248v20H4.75A2.75 2.75 0 0 1 2 21.25zM22.75 24h-7.252V4h7.252a2.75 2.75 0 0 1 2.75 2.75v14.5A2.75 2.75 0 0 1 22.75 24"></svg:path>`,
})
export class FluentSplitVertical28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
