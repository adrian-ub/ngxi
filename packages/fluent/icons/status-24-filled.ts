import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStatus24FilledIcon],svg[fluent-status-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.025 3.025a3.5 3.5 0 0 1 4.95 4.95l-6.06 6.06a2.75 2.75 0 0 1-1.254.717l-4.723 1.224a.75.75 0 0 1-.914-.914l1.224-4.723a2.75 2.75 0 0 1 .718-1.254zm-1.694.28a9 9 0 1 0 6.364 6.364l-1.27 1.27q.075.52.075 1.061a7.5 7.5 0 1 1-6.439-7.425z"></svg:path>`,
})
export class FluentStatus24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
