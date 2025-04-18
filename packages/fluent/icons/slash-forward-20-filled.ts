import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlashForward20FilledIcon],svg[fluent-slash-forward-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.016 2.049a.75.75 0 0 1 .435.967l-5.5 14.5a.75.75 0 1 1-1.402-.532l5.5-14.5a.75.75 0 0 1 .967-.435"></svg:path>`,
})
export class FluentSlashForward20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
