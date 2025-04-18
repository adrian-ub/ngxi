import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVirtualNetwork20FilledIcon],svg[fluent-virtual-network-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.707 6.156a.75.75 0 0 1 .137 1.051L2.696 10l2.148 2.793a.75.75 0 1 1-1.188.914l-2.5-3.25a.75.75 0 0 1 0-.914l2.5-3.25a.75.75 0 0 1 1.051-.137m10.449 6.637a.75.75 0 1 0 1.188.914l2.5-3.25a.75.75 0 0 0 0-.914l-2.5-3.25a.75.75 0 1 0-1.188.914L17.304 10zM6 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentVirtualNetwork20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
