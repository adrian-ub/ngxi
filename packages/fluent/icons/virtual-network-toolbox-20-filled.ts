import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVirtualNetworkToolbox20FilledIcon],svg[fluent-virtual-network-toolbox-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.844 7.207a.75.75 0 0 0-1.188-.914l-2.5 3.25a.75.75 0 0 0 0 .914l2.5 3.25a.75.75 0 1 0 1.188-.914L2.696 10zm13.114 3.835a2.5 2.5 0 0 0-1.13-1.66l-1.672-2.175a.75.75 0 1 1 1.188-.914l2.5 3.25a.75.75 0 0 1 0 .914l-.523.68a2.5 2.5 0 0 0-.363-.095M7 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 1v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5m4 4.5h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentVirtualNetworkToolbox20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
