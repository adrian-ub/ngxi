import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlashForward12RegularIcon],svg[fluent-slash-forward-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.658 1.026a.5.5 0 0 1 .316.632l-3 9a.5.5 0 1 1-.948-.316l3-9a.5.5 0 0 1 .632-.316"></svg:path>`,
})
export class FluentSlashForward12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
