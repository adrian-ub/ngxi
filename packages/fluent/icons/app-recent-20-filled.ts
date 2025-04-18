import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppRecent20FilledIcon],svg[fluent-app-recent-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM2 6a2 2 0 0 1 2-2v12a2 2 0 0 1-2-2zm14 10V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2"></svg:path>`,
})
export class FluentAppRecent20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
