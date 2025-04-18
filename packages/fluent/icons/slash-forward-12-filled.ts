import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlashForward12FilledIcon],svg[fluent-slash-forward-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.464 1.03a.75.75 0 0 1 .507.932l-2.501 8.5a.75.75 0 0 1-1.44-.424l2.503-8.5a.75.75 0 0 1 .93-.507"></svg:path>`,
})
export class FluentSlashForward12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
