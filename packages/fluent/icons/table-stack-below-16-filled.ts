import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackBelow16FilledIcon],svg[fluent-table-stack-below-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1zM5 10H2.5a.5.5 0 0 1-.5-.5V6h3zm1 0h4V6H6zm8-4v3.5a.5.5 0 0 1-.5.5H11V6zm-3-1h3v-.5A2.5 2.5 0 0 0 11.5 2H11zm-1-3H6v3h4zM4.5 2H5v3H2v-.5A2.5 2.5 0 0 1 4.5 2"></svg:path>`,
})
export class FluentTableStackBelow16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
